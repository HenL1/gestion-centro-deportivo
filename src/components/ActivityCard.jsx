function TarjetaActividad({ actividad, alSeleccionar }) {
  return (
    <article className="tarjeta-actividad">
      <span className="etiqueta-categoria">{actividad.categoria}</span>
      <h2>{actividad.nombre}</h2>

      <p className="dato-actividad">
        <strong>Profesor:</strong> {actividad.profesor}
      </p>

      <p className="dato-actividad">
        <strong>Horario:</strong> {actividad.horario}
      </p>

      <p className="dato-actividad">
        <strong>Hora:</strong> {actividad.hora}
      </p>

      <p className="cupos">
        <strong>Cupos disponibles:</strong> {actividad.cuposDisponibles}
      </p>

      <button
        className="boton boton-secundario"
        onClick={() => alSeleccionar(actividad)}
      >
        Ver detalles
      </button>
    </article>
  );
}

export default TarjetaActividad;
