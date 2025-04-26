const API_URL = "https://rickandmortyapi.com/api/character";

/**
 * Busca personagens da API
 * @param {number} page Página atual
 * @param {Object} filters Filtros como { name, status, species }
 * @returns {Promise<Object>} Dados com `results` e `info`
 */
export async function fetchCharacters(page = 1, filters = {}) {
  const cleanFilters = { ...filters };
  delete cleanFilters.id; // ID não vai para API

  const params = new URLSearchParams({ page, ...cleanFilters });
  const response = await fetch(`${API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar personagens");
  }

  return await response.json();
}
