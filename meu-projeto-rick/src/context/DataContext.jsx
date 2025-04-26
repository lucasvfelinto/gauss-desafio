import { createContext, useEffect, useState } from "react";
import { fetchCharacters } from "../services/api";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ key: "id", direction: "asc" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(20); // novo

  // Fetch quando muda página ou filtros
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null);
    
      try {
        // Remove filtros vazios para não enviar à API
        const queryFilters = { ...filters };
        delete queryFilters.id;
    
        const response = await fetchCharacters(page, queryFilters);
        let results = response.results || [];
    
        // Se tiver filtro por ID, filtramos localmente
        if (filters.id) {
          results = results.filter((char) => String(char.id) === String(filters.id));
        }
    
        setData(results);
        setPaginationInfo(response.info);
      } catch (err) {
        setError(err.message || "Erro ao buscar personagens.");
      } finally {
        setLoading(false);
      }
    }
    
    
    

    loadData();
  }, [page, filters]);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        page,
        setPage,
        paginationInfo,
        filters,
        setFilters,
        sort,
        setSort,
        itemsPerPage,     // novo
        setItemsPerPage,  // novo
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
