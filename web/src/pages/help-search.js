import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchHelp, fetchHelpFromCache } from "../redux/actions";
import { saveKeyword, getKeyword, countKeyword, findKeyword } from '../utils/storage'
import { urlRewriting } from "../utils/helper";
import { getCache, setCache } from '../utils/cache'
import { SearchBox, SearchResults, Pagination, SearchKeyWord } from '../components'

const HelpSearch = (props) => {
    const { helpResults, success, error, } = useSelector(({ helpsearch }) => helpsearch);
    const [pageResults, setPageResults] = useState([])
    const [keyword, setKeyword] = useState("")
    const [validationMessage, setValidationMessage] = useState("")
    const dispatch = useDispatch();
    const [keywordList, setKeyWordList] = useState(() => countKeyword() > 0 ? getKeyword() : [])
    const { query } = Object.fromEntries([...new URLSearchParams(window.location?.search)]);

    useEffect(() => {
        query && (
            dispatcher(query)
        )
    }, [query])

    useEffect(() => {
        if (success && helpResults.length > 0) {
            setCache(keyword, helpResults)
        }
    }, [success, helpResults.length]);

    const onSubmit = () => {

        if (!keyword) {
            setValidationMessage("Search keyword is required")
            return
        }

        const result = getCache(keyword)
        if (!result) {
            dispatcher(keyword)
            urlRewriting(`${window.location.pathname}?query=${keyword}`)
        } else {
            dispatch(fetchHelpFromCache)
        }

        onSaveKeyword()
    }

    const onClickKeyword = (keyword) => {
        dispatcher(keyword)
        urlRewriting(`${window.location.pathname}?query=${keyword}`)
    }

    const onSaveKeyword = () => {
        if (keyword && !findKeyword(keyword)) {
            if (keywordList?.length === 5) {
                keywordList.shift()
            }
            setKeyWordList([...keywordList, keyword])
            saveKeyword(keywordList, keyword)
        }
    }

    const onSearchBlur = (e) => {
        if (!e.target.value) {
            setValidationMessage("Search keyword is required")
            return
        }
        setKeyword(() => e.target.value)
    }

    const onFocus = () => {
        setValidationMessage("")
    }

    const dispatcher = (query) => {
        dispatch(fetchHelp({ query: query }))
    }

    return (
        <div className="container" >
            <h1>Help Search</h1>
            <span>{validationMessage}</span>
            <SearchBox onSearchBlur={onSearchBlur} onSubmit={onSubmit} onFocus={onFocus} />
            <SearchKeyWord onClickKeyword={onClickKeyword} keywordList={keywordList} />
            {error ? (<span>Something went wrong ...</span>) : <SearchResults pageResults={pageResults} />}
            <Pagination
                helpResults={helpResults}
                setPageResults={setPageResults}
                page={1}
                pageSize={10}
            />

        </div>
    )

}

export default HelpSearch