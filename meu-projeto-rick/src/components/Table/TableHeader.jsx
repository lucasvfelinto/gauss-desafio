import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import SortIcon from "./SortIcon";

function TableHeader() {
  const { sort, setSort } = useContext(DataContext);

  function handleSort(key) {
    if (sort.key === key) {
      if (key === "id") {
        // Para ID, só alterna entre asc/desc
        setSort({
          key,
          direction: sort.direction === "asc" ? "desc" : "asc",
        });
      } else if (sort.direction === "asc") {
        setSort({ key, direction: "desc" });
      } else if (sort.direction === "desc") {
        setSort({ key: "", direction: "" });
      } else {
        setSort({ key, direction: "asc" });
      }
    } else {
      setSort({ key, direction: "asc" });
    }
  }

  return (
    <thead className="bg-gray-100">
      <tr>
        <th
          className="text-left p-3 cursor-pointer hover:text-blue-600 select-none"
          onClick={() => handleSort("id")}
        >
          ID <SortIcon active={sort.key === "id"} direction={sort.direction} columnKey="id" />
        </th>

        <th className="text-left p-3">Imagem</th>

        <th
          className="text-left p-3 cursor-pointer hover:text-blue-600 select-none"
          onClick={() => handleSort("name") }
        >
          Nome <SortIcon active={sort.key === "name"} direction={sort.direction} columnKey="name"/>
        </th>

        <th className="text-left p-3">Espécie</th>

        <th
          className="text-left p-3 cursor-pointer hover:text-blue-600 select-none"
          onClick={() => handleSort("status")}
        >
          Status <SortIcon active={sort.key === "status"} direction={sort.direction} columnKey="status" />
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;
