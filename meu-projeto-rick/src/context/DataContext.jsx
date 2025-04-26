import { createContext, useEffect, useState } from "react";
import { fetchCharacters } from "../services/api";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ key: "", direction: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(20); // novo

  // Fetch quando muda página ou filtros
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null);
      try {
        let results = [];
        let info = {};
  
        if (filters.id) {
          // Busca apenas o personagem pelo ID
          const response = await fetch(`https://rickandmortyapi.com/api/character/${filters.id}`);
          
          if (!response.ok) {
            throw new Error("Personagem não encontrado.");
          }
  
          const character = await response.json();
          let filteredResults = [character];
  
          // Agora filtra localmente com os outros filtros
          if (filters.name) {
            filteredResults = filteredResults.filter(c => 
              c.name.toLowerCase().includes(filters.name.toLowerCase())
            );
          }
          if (filters.species) {
            filteredResults = filteredResults.filter(c => 
              c.species.toLowerCase().includes(filters.species.toLowerCase())
            );
          }
          if (filters.status) {
            filteredResults = filteredResults.filter(c => 
              c.status.toLowerCase() === filters.status.toLowerCase()
            );
          }
  
          results = filteredResults;
          info = { count: filteredResults.length, pages: 1 };
        } else {
          // Busca normal paginada
          const response = await fetchCharacters(page, filters);
          results = response.results;
          info = response.info;
        }
  
        setData(results);
        setPaginationInfo(info);
      } catch (err) {
        setData([]);
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
