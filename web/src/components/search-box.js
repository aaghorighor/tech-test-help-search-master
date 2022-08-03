import React from "react";
import PropTypes from 'prop-types';

const SearchBox = ({ onSearchBlur, onFocus, onSubmit }) => {
    return (
        <div className="search-container">
            <input type={'text'} id='search' placeholder={'Search here...'} onFocus={onFocus} onBlur={onSearchBlur} maxLength={50} ></input>
            <i className="fa fa-search" data-testid="fa-search" onClick={onSubmit}></i>
        </div>
    )
}

SearchBox.propTypes = {
    onSearchBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default SearchBox;