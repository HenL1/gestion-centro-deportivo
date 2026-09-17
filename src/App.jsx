import {useEffect, useState} from "react";
import { getActivies } from "./services/activityService";
import ActivityList from "./components/ActivityList";
import SearchBar from "./components/SearchBar";
import ActivityDetail from "./components/ActivityDetail";

function App() {
  const [search, setSearch] = useState("");
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [registeredActivities, setRegisteredActivities] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoaading] = useState(true);

  useEffect(() => {
    getActivies().then((data) => {
      setActivities(data);
      setLoaading(false);
    });
  },[]);

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

      {loading? (
        <p>Cargando actividades...</p>
      ) : selectedActivity ? (
            <ActivityDetail
            activity={selectedActivity}
            onBack={() => setSelectedActivity(null)}
            onRegister={handleRegister}
            isRegistered={registeredActivities.includes(selectedActivity.id)}
            //ve si el id ya esta inscrito sino dice inscribirme
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