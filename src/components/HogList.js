import React from "react";
import Hog from "./Hog";

function HogList({ hogs }) {
  return (
    <div className="ui grid container">
      {hogs.map(hog => (
        <div className="ui eight wide column" key={hog.name}>
          <Hog hog={hog} />
        </div>
      ))}
    </div>
  );
}

export default HogList;