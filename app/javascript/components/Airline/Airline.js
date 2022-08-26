import React from 'react';
import { Link } from 'react-router-dom';
import './Airline.css'

const Airline = ({ airline }) => {
  return (
    <div className='grid'>
      <img src={airline.attributes.image_url} alt={airline.attributes.name} />
      <h2>{airline.attributes.name}</h2>
      <h2>{airline.attributes.avg_score}</h2>
      <Link to={`/airlines/${airline.attributes.slug}`}>View Airline</Link>
    </div>
  )
}

export default Airline
