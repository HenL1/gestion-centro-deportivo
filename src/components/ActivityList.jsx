import ActivityCard from "./ActivityCard";

function ActivityList({ activities, onSelect }) {
  return (
    <section>
      <h2>Actividades disponibles</h2>

      <div>
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

export default ActivityList;