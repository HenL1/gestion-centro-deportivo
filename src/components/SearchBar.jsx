function BarraBusqueda({ busqueda, alBuscar }) {
  return (
    <div className="buscador">
      <label htmlFor="search">Buscar actividad</label>

      <input
        id="search"
        type="text"
        placeholder="Ej: fútbol, Yoga o Carlos Pérez"
        value={busqueda}
        onChange={(evento) => alBuscar(evento.target.value)}
      />
      <p>Busca por nombre, profesor o categoría.</p>
    </div>
  );
}

export default BarraBusqueda;
