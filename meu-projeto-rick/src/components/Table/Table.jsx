import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table() {
  const { data, loading, error, itemsPerPage, sort } = useContext(DataContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // ⚠️ Erro real da API (ex: ID inválido)
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-red-600">
        <span className="text-6xl mb-4">⚠️</span>
        <p className="text-xl font-semibold">{error}</p>
        <p className="text-sm text-gray-500 mt-2">Verifique se o ID está correto ou tente novamente mais tarde.</p>
      </div>
    );
  }

  // ✅ Aplicar ordenação
  const sortedData = [...data].sort((a, b) => {
    if (!sort.key) return 0;

    const aValue = a[sort.key];
    const bValue = b[sort.key];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sort.direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    const aStr = (aValue || "").toString().toLowerCase();
    const bStr = (bValue || "").toString().toLowerCase();

    return sort.direction === "asc"
      ? aStr.localeCompare(bStr)
      : bStr.localeCompare(aStr);
  });

  // 🔍 Resposta válida, mas sem personagens
  if (sortedData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-600">
        <span className="text-6xl mb-4">🔍</span>
        <p className="text-xl font-semibold">Nenhum personagem encontrado</p>
        <p className="text-sm text-gray-400 mt-2">Tente ajustar seus filtros e buscar novamente.</p>
      </div>
    );
  }

  // ✅ Renderizar tabela
  return (
    <div className="overflow-x-auto rounded shadow-md">
      <table className="min-w-full bg-white">
        <TableHeader />
        <tbody>
          {sortedData.slice(0, itemsPerPage).map((character) => (
            <TableRow key={character.id} character={character} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
