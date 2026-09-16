function ActivityDetail({activity, onBack}){
    return(
        <section>
            <button onClick={onBack}>
                Volver
            </button>

            <h2>{activity.name}</h2>

            <p>
                <strong>Categoria:</strong>{activity.cattegory}
            </p>

            <p>
                <strong>Profesor:</strong>{activity.teacher}
            </p>

            <p>
                <strong>Horario:</strong>{activity.schedule}
            </p>

            <p>
                <strong>Cupos disponibles:</strong>{activity.availableSpots}
            </p>

            <p>
                <strong>Descripcion:</strong>{activity.descriptiom}
            </p>
        </section>
    );
}
export default ActivityDetail;