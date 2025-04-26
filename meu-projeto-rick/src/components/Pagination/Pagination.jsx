import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Pagination() {
  const { page, setPage, paginationInfo, loading } = useContext(DataContext);

  function nextPage() {
    if (page < paginationInfo.pages) {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={prevPage}
        disabled={page === 1 || loading}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        Anterior
      </button>

      <span className="self-center font-semibold">
        Página {page} de {paginationInfo.pages || "?"}
      </span>

      <button
        onClick={nextPage}
        disabled={page === paginationInfo.pages || loading}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        Próxima
      </button>
    </div>
  );
}

export default Pagination;
