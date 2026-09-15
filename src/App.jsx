import { useState } from "react";
import { activities } from "./data/activities";
import ActivityList from "./components/ActivityList";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");

  const filteredActivities = activities.filter((activity) =>
    activity.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Gestión de Centro Deportivo</h1>

      <SearchBar
        search={search}
        onSearch={setSearch}
      />

      <ActivityList
        activities={filteredActivities}
        onSelect={() => {}}
      />
    </div>
  );
}

export default App;

