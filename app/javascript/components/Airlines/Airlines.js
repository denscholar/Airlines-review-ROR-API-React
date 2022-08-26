import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Airline from '../Airline/Airline';
import './Airlines.css';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/airlines.json')
      .then((res) => {
        setAirlines(res.data.data);
        console.log(res)
      }).catch((err) => {
        console.log(err.message)
      })
  }, [airlines.length])

  return (
    <div className='header'>
      <h1>Open Flight Review</h1>
      <div className="review">Honest, Unbias, Airline Reviews</div>
      <div className="grid-items">
        {airlines.map((airline) => (
            <Airline key={airline.attributes.name} airline={airline} />
        ))}
      </div>
    </div>
  )
}

export default Airlines
