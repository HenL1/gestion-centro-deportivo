//barra de busqueda 
function SearchBar({ search, onSearch }) {
  return (
    <div>
      <label htmlFor="search">
        Buscar actividad:
      </label>

      <input
        id="search"
        type="text"
        placeholder="Ej: fútbol"
        value={search}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;