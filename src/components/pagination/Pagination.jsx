import React from "react";
import { useSearch } from "../../context/searchContext";
import "./Pagination.css";

function Pagination() {
  const { page, totalPages, onLeftClickHandler, onRightClickHandler } =
    useSearch();
  return (
    <div className="paginationContent">
      <button onClick={onLeftClickHandler}>
        <div>◀</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClickHandler}>
        <div>▶</div>
      </button>
    </div>
  );
}

export default Pagination;
