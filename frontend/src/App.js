import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/login";
import Register from "./Pages/Auth/reg";
import Weather from "./Components/Weather/weather";
import WeatherDay from "./Components/Weather/weatherExtended";
import WeatherMain from "./Components/Weather/weather";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path={"weather"} element={<WeatherMain/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

