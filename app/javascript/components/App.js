import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Airlines from "./Airlines/Airlines";
import AirlineDetails from './AirlineDetails/AirlineDetails'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Airlines />} />
          <Route path="/airlines/:slug" element={<AirlineDetails />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}


export default App