import "./pagination.css";
export default function Pagination({ page, totalPages, onPrev, onNext }) {
  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onPrev} disabled={page === 0}>
        &lsaquo;
      </button>
      <span>
        {page + 1} / {totalPages}
      </span>
      <button
        className="pagination-btn"
        onClick={onNext}
        disabled={page + 1 === totalPages}
      >
        &rsaquo;
      </button>
    </div>
  );
}
