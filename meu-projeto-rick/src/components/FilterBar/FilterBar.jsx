import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";

function FilterBar() {
  const { setFilters, setPage, setItemsPerPage } = useContext(DataContext);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [items, setItems] = useState(20); // novo: quantidade inicial
  const [id, setId] = useState(""); // novo estado para ID

  function handleClearFilters() {
    setName("");
    setStatus("");
    setSpecies("");
    setId("");
    setItems(20);
    setFilters({});
    setPage(1);
    setItemsPerPage(20);
  }
  function handleFilterSubmit(e) {
    e.preventDefault();
    setPage(1); // Sempre volta pra primeira página ao filtrar
    setFilters({
      id,
      name,
      status,
      species,
    });
    setItemsPerPage(items); // novo: envia o limite
  }

  return (
    <form onSubmit={handleFilterSubmit} className="flex flex-wrap gap-4 mb-6 items-end">
      <div>
        <label className="block text-sm mb-1">ID</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border rounded p-2 w-36"
          placeholder="Digite o ID"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-48"
          placeholder="Digite o nome"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded p-2 w-48"
        >
          <option value="">Todos</option>
          <option value="alive">Vivo</option>
          <option value="dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>
      </div>

      <div>
        <label className="block text-sm mb-1">Espécie</label>
        <input
          type="text"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="border rounded p-2 w-48"
          placeholder="Digite a espécie"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Personagens por página</label>
        <select
          value={items}
          onChange={(e) => setItems(Number(e.target.value))}
          className="border rounded p-2 w-48"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Filtrar
      </button>
      <button
        type="button"
        onClick={handleClearFilters}
        className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
      >
        Limpar Filtros
      </button>
    </form>
  );
}

export default FilterBar;
