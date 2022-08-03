import React from "react";
import PropTypes from 'prop-types';

const SearchKeyWord = ({ keywordList, onClickKeyword }) => {
    return (
        <div className="search-keyword-container">
            {
                keywordList.map((value, index) => (
                    <span key={index} onClick={() => onClickKeyword(value)} className="keyword">{value}</span>
                ))
            }
        </div>
    )
}

SearchKeyWord.propTypes = {
    keywordList: PropTypes.array.isRequired,
    onClickKeyword: PropTypes.func.isRequired
}

SearchKeyWord.defaultProps = {
    keywordList: [],
};

export default SearchKeyWord