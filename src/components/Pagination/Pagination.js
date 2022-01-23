import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";

const Pagination = ({ numeroPagina, setPageNumber, info }) => {
  // let next = () => {
  //   setPageNumber((x) => x + 1);
  // };

  // let prev = () => {
  //   // if (numeroPagina === 1) return;
  //   setPageNumber((x) => x - 1);
  // };

  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={numeroPagina === 1 ? 0 : numeroPagina - 1}
      nextLabel="Next"
      previousLabel="Previous"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextLinkClassName="btn btn-primary"
      previousLinkClassName="btn btn-primary"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
