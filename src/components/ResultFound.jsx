import React from 'react'

const ResultFound = ({movies}) => {
  return (
    <div className='num-results'>
      <h2>Found <span>{movies?.length}</span> result</h2>
    </div>
  )
}

export default ResultFound
