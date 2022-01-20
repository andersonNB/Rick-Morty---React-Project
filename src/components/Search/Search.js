import React from "react";
import styles from "./Search.module.scss";
const Search = () => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input placeholder="Search for characteres" type="text" className={styles.input} />
      <button className="btn btn-primary">Search</button>
    </form>
  );
};

export default Search;
