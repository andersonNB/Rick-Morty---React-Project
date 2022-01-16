import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';

function App() {
//Con esta variables controlamos en que página estamos
  let [pageNumber, setPageNumber] = useState(1);
  let[fetchedData, updateFetchedData] = useState([]);
  let {info,results} = fetchedData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;


  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })();
  },[api]);

  
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">Wiki</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters></Filters>
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results}></Cards>
            </div>
          </div>
        </div>
      </div>

      <Pagination numeroPagina={pageNumber} setPageNumber={setPageNumber}></Pagination>
    </div>
  );
}

export default App;
