import BotonInscripcion from "./RegistrationButton";

function DetalleActividad({
  actividad,
  alVolver,
  alInscribir,
  alCancelar,
  estaInscrita,
}) {
  return (
    <section className="detalle-actividad">
      <button className="boton-volver" onClick={alVolver}>
        ← Volver a las actividades
      </button>

      <span className="etiqueta-categoria">{actividad.categoria}</span>
      <h2>{actividad.nombre}</h2>
      <p className="descripcion-actividad">{actividad.descripcion}</p>

      <div className="datos-detalle">
        <div><span>Profesor</span><strong>{actividad.profesor}</strong></div>
        <div><span>Días</span><strong>{actividad.horario}</strong></div>
        <div><span>Horario</span><strong>{actividad.hora}</strong></div>
        <div><span>Valor por hora</span><strong>${actividad.valorHora.toLocaleString("es-CL")}</strong></div>
        <div><span>Cupos disponibles</span><strong>{actividad.cuposDisponibles}</strong></div>
      </div>

      <BotonInscripcion
        actividad={actividad}
        alInscribir={alInscribir}
        alCancelar={alCancelar}
        estaInscrita={estaInscrita}
      />
    </section>
  );
}

export default DetalleActividad;
