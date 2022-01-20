import React from "react";

const Pagination = ({ numeroPagina, setPageNumber }) => {
  let next = () => {
    setPageNumber((x) => x + 1);
  };

  let prev = () => {
    // if (numeroPagina === 1) return;
    setPageNumber((x) => x - 1);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      Pagination
      <button onClick={prev} disabled = {numeroPagina === 1} className="btn btn-primary">
        Prev
      </button>
      <button onClick={next} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Pagination;
