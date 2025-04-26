function TableRow({ character }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{character.id}</td> {/* ID mostrado aqui */}

      <td className="p-3">
        <img src={character.image} alt={character.name} className="w-20 h-20 rounded-full mb-4 shadow-md border-2 border-blue-300 dark:border-blue-500 transition-all duration-300 hover:scale-105" />
      </td>

      <td className="p-3 font-medium">{character.name}</td>

      <td className="p-3">{character.species}</td>

      <td className="p-3">{character.status}</td>
    </tr>
  );
}

export default TableRow;
