import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const AirlineDetails = () => {
  
  const [airline, setAirline] = useState([]);
  const { slug } = useParams();  // used to extract the slug/params from the API

  useEffect(() => {
    const url = `/api/v1/airlines/${slug}`
    axios.get(url)
      .then((res) => {
        setAirline(res.data.data);
        console.log(res)
      }).catch((err) => {
        console.log(err.message)
      })
  }, [airline.length])
  
  return (
    <div>
      <h1>This is the airline details page</h1>
    </div>
  )
}

export default AirlineDetails
