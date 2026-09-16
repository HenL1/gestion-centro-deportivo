import { useState } from "react";
import { activities } from "./data/activities";
import ActivityList from "./components/ActivityList";
import SearchBar from "./components/SearchBar";
import ActivityDetail from "./components/ActivityDetail";

function App() {
  const [search, setSearch] = useState("");
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [registeredActivities, setRegisteredActivities] = useState([]);

  const filteredActivities = activities.filter((activity) =>
    activity.name.toLowerCase().includes(search.toLowerCase())
  );

    const handleRegister = (activity) =>{
    setRegisteredActivities([
      ...registeredActivities,
      activity.id 
    ]);
  };

  return (
    <div>
      <h1>Gestión de Centro Deportivo</h1>

      {selectedActivity ? (
        <ActivityDetail
          activity={selectedActivity}
          onBack={() => setSelectedActivity(null)}
          onRegister={handleRegister}
          isRegistered={registeredActivities.includes(selectedActivity.id)}//ve si el id ya esta inscrito si no dice inscribirme
        />
      ) : (
        <>
          <SearchBar
            search={search}
            onSearch={setSearch}
          />

          <ActivityList
            activities={filteredActivities}
            onSelect={setSelectedActivity}
          />
        </>
      )}
    </div>
  );
}

export default App;