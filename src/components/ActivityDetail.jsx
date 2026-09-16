import RegistrationButton from "./RegistrationButton";

function ActivityDetail({
    activity,
    onBack, 
    onRegister,
    isRegistered
    }){return (
        <section>
            <button onClick={onBack}>
                Volver
            </button>

            <h2>{activity.name}</h2>

            <p>
                <strong>Categoria:</strong>{activity.category}
            </p>

            <p>
                <strong>Profesor:</strong>{activity.teacher}
            </p>

            <p>
                <strong>Horario:</strong>{activity.schedule}
            </p>

            <p>
                <strong>Hora:</strong>{activity.time}
            </p>

            <p>
                <strong>cupos disponibles:</strong>{activity.availableSpots}
            </p>

            <p>
                <strong>Descripcion:</strong>{activity.description}
            </p>

            <RegistrationButton 
            activity={activity}
            onRegister={onRegister}
            isRegistered={isRegistered}
            />
        </section>
    );
}

export default ActivityDetail;