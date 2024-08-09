import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogForm from "./HogForm";
import hogsData from '../porkers_data';  

function App() {
  const [hogs, setHogs] = useState(hogsData);  
  const [sortOption, setSortOption] = useState("name");
  const [isGreased, setIsGreased] = useState(false);
  
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleGreasedFilter = () => {
    setIsGreased(!isGreased);
  };

  const sortedHogs = [...hogs].sort((a, b) => {
    if (sortOption === "name") return a.name.localeCompare(b.name);
    return a.weight - b.weight;
  });

  const filteredHogs = isGreased ? sortedHogs.filter(hog => hog.greased) : sortedHogs;

  return (
    <div className="App">
      <Nav 
        onSortChange={handleSortChange} 
        onGreasedFilter={handleGreasedFilter}
      />
      <HogList hogs={filteredHogs} />
      <HogForm onAddHog={(newHog) => setHogs([...hogs, newHog])} />
    </div>
  );
}

export default App;