/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import CountryDetails from "./CountryDetails";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import uuid from "react-uuid";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import TableComp from "./TableComp";

function App() {
  const [countryData, setCountryData] = useState([]);

  var opt = useMemo(() => {
    return {
      method: "GET",
      url: "https://restcountries-v1.p.rapidapi.com/all",
      headers: {
        "x-rapidapi-key": "4355743bcfmsh57b2b0aaea79e2bp17f99cjsn57836fb316fa",
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      },
    };
  }, []);

  function loadData(options) {
    axios
      .request(options)
      .then((response) => {
        const countryData = response.data;
        setCountryData(countryData);
        console.log("data after load", countryData);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    loadData(opt);
    console.log("data is ", countryData);
  }, [opt]);

  return (
    <div className="app">
      <Router>
        <div className="toolbar">
          <Link to="/">Grid </Link>

          <Link to="/table">Table </Link>
        </div>
        <Route path="/" exact>
          <CountryDetails key={uuid()} countryData={countryData} />
        </Route>
        <Route path="/table" exact>
          <TableComp countryData={countryData} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
