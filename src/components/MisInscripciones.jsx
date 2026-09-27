function MisInscripciones({ actividades, alSeleccionar, alCancelar }) {
  return (
    <section className="mis-inscripciones">
      <div className="titulo-seccion">
        <div>
          <p className="subtitulo">Tu selección</p>
          <h2>Mis inscripciones</h2>
        </div>
        <span className="contador-actividades">{actividades.length}</span>
      </div>

      {actividades.length === 0 ? (
        <p className="sin-inscripciones">
          Todavía no te has inscrito en ninguna actividad.
        </p>
      ) : (
        <div className="lista-inscripciones">
          {actividades.map((actividad) => (
            <article className="inscripcion" key={actividad.id}>
              <button
                className="nombre-inscripcion"
                onClick={() => alSeleccionar(actividad)}
              >
                {actividad.nombre}
              </button>
              <p>{actividad.horario} · {actividad.hora}</p>
              <button
                className="boton-cancelar-lista"
                onClick={() => alCancelar(actividad)}
              >
                Cancelar
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default MisInscripciones;
