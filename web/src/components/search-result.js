import React from "react";
import PropTypes from 'prop-types';
import { filterResults } from "../utils/helper";

const SearchResults = ({ pageResults }) => {   
    return (
        <div className="search-result-container">
            {
               pageResults ? (
                    filterResults(pageResults)?.map((value, index) => (
                        <div key={index} className="row">
                            <a href={value.url} target='_blank' rel="noreferrer"><strong>{value.title}</strong></a><span></span>
                            <p>{value.description}</p>
                        </div>
                    ))
                ) : (
                    <div> No record found</div>
                )
            }
        </div>
    )
}

SearchResults.propTypes = {
    pageResults: PropTypes.array.isRequired
}

SearchResults.defaultProps = {
    pageResults: []
};

export default SearchResults