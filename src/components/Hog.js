import React, { useState } from "react";

function Hog({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui card" onClick={() => setShowDetails(!showDetails)}>
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
    <div className="content">
        <span className="header">{hog.name}</span>
    </div>
      {showDetails && (
        <div className="extra content">
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default Hog;