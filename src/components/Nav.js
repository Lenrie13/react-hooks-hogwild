import React from "react";

function Nav({ onSortChange, onGreasedFilter }) {
  return (
    <nav>
      <button onClick={() => onSortChange("name")}>Sort by Name</button>
      <button onClick={() => onSortChange("weight")}>Sort by Weight</button>
      <button onClick={onGreasedFilter}>Toggle Greased</button>
    </nav>
  );
}

export default Nav;