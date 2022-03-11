import React from "react";
import "./Pagination.css";

function Pagination({ page, totalPages, onLeftClick, onRightClick }) {
  return (
    <div className="paginationContent">
      <button onClick={onLeftClick}>
        <div>◀</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div>▶</div>
      </button>
    </div>
  );
}

export default Pagination;
