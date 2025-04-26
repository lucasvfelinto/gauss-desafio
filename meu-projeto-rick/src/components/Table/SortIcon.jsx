function SortIcon({ active, direction, columnKey }) {
    if (columnKey === "id") {
      // Para o ID
      if (!active || !direction) {
        return <span className="ml-1 text-blue-600">⬆️</span>;
      }
      if (direction === "asc") {
        return <span className="ml-1 text-blue-600">⬆️</span>;
      }
      if (direction === "desc") {
        return <span className="ml-1 text-blue-600">⬇️</span>;
      }
    } else {
      // Para as outras colunas (nome, status, etc)
      if (!active || !direction) {
        return <span className="ml-1 text-gray-400">↕️</span>;
      }
      if (direction === "asc") {
        return <span className="ml-1 text-blue-600">⬆️</span>;
      }
      if (direction === "desc") {
        return <span className="ml-1 text-blue-600">⬇️</span>;
      }
    }
  
    return null;
  }
  
  export default SortIcon;
  