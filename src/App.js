import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/episodes" element={<Episodes></Episodes>}></Route>
        <Route path="/location" element={<Location></Location>}></Route>
      </Routes>
    </Router>
  );
}

const Home = () => {
  //Con esta variables controlamos en que página estamos
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch}></Search>
      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
          ></Filters>
          <div className="col-8">
            <div className="row">
              <Cards results={results}></Cards>
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        numeroPagina={pageNumber}
        setPageNumber={setPageNumber}
      ></Pagination>
    </div>
  );
};

export default App;
