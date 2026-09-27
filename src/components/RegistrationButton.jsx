function BotonInscripcion({
  actividad,
  alInscribir,
  alCancelar,
  estaInscrita,
}) {
  const sinCupos = actividad.cuposDisponibles === 0 && !estaInscrita;

  const manejarClic = () => {
    if (estaInscrita) {
      alCancelar(actividad);
    } else {
      alInscribir(actividad);
    }
  };

  return (
    <button
      className={`boton ${estaInscrita ? "boton-peligro" : "boton-principal"}`}
      onClick={manejarClic}
      disabled={sinCupos}
    >
      {estaInscrita
        ? "Cancelar inscripción"
        : sinCupos
          ? "Sin cupos disponibles"
          : "Inscribirme en esta actividad"}
    </button>
  );
}

export default BotonInscripcion;
