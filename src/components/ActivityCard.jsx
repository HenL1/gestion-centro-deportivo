function ActivityCard({ activity, onSelect }) {
  return (
    <article>
      <h2>{activity.name}</h2>

      <p>
        <strong>Profesor:</strong> {activity.teacher}
      </p>

      <p>
        <strong>Horario:</strong> {activity.schedule}
      </p>

      <p>
        <strong>Hora:</strong> {activity.time}
      </p>

      <p>
        <strong>Cupos disponibles:</strong> {activity.availableSpots}
      </p>

      <button onClick={() => onSelect(activity)}>
        Ver detalles
      </button>
    </article>
  );
}

export default ActivityCard;