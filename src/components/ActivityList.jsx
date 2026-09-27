import TarjetaActividad from "./ActivityCard";

function ListaActividades({ actividades, alSeleccionar }) {
  return (
    <section className="seccion-actividades">
      <div className="titulo-seccion">
        <div>
          <p className="subtitulo">Nuestra programación</p>
          <h2>Actividades disponibles</h2>
        </div>
        <span className="contador-actividades">
          {actividades.length} {actividades.length === 1 ? "actividad" : "actividades"}
        </span>
      </div>

      {actividades.length > 0 ? (
        <div className="grilla-actividades">
          {actividades.map((actividad) => (
            <TarjetaActividad
              key={actividad.id}
              actividad={actividad}
              alSeleccionar={alSeleccionar}
            />
          ))}
        </div>
      ) : (
        <p className="sin-resultados">
          No encontramos actividades que coincidan con la búsqueda.
        </p>
      )}
    </section>
  );
}

export default ListaActividades;
