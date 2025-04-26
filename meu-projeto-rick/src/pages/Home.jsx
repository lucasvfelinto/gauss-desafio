import Table from "../components/Table/Table";
import FilterBar from "../components/FilterBar/FilterBar";
import Pagination from "../components/Pagination/Pagination";

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Rick and Morty - Personagens</h1>
      <FilterBar />
      <Pagination />
      <Table />
      <Pagination />
    </div>
  );
}

export default Home;
