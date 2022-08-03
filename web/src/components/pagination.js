import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const Pagination = ({ helpResults, setPageResults, page, pageSize }) => {
  const [pageNumber, setPageNumber] = useState(page)
  const noOfPages = Math.ceil(helpResults?.length / pageSize);

  useEffect(() => {
    const pageResults = helpResults?.slice((pageNumber - 1) * pageSize, (pageNumber - 1) * pageSize + pageSize)
    setPageResults(pageResults)
  }, [pageSize, pageNumber, helpResults.length])

  const onPrevious = () => {
    if (pageNumber === 1) return
    setPageNumber(pageNumber - 1)
  }

  const onNext = () => {
    if (noOfPages === pageNumber) return
    setPageNumber(pageNumber + 1)
  }

  return (
    <div className="search-pagination-container">
      <div>
        Showing {pageNumber} of {noOfPages}
      </div>

      <div style={{ marginLeft: '5px' }}>
        <button className='page-btn' onClick={onPrevious}>Previous</button>
        <button className='page-btn' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  helpResults: PropTypes.array.isRequired,
  setPageResults: PropTypes.func,
  pageSize: PropTypes.number,
  page: PropTypes.number
}

Pagination.defaultProps = {
  helpResults: []
};

export default Pagination