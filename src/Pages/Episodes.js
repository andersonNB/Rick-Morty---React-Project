import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";

const Episodes = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  console.log(info);
  const { air_date, name } = info;
  console.log(air_date);
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.table(data);
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );

      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episode:{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3" style={{ "background-color": "salmon" }}>
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col-8" style={{ "background-color": "cornflowerblue" }}>
          <div className="row" style={{ "background-color": "yellow" }}>
            <Cards results={results}></Cards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
