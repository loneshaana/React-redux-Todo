import React from "react";

const FilterLink = ({ setVisibility, filterBy }) => {
  return (
    <div className="flat">
      <div
        className={filterBy === "SHOW_ALL" ? "box active" : "box inactive"}
        onClick={() => setVisibility("SHOW_ALL")}
      >
        All
      </div>
      <div
        className={
          filterBy === "SHOW_COMPLETED" ? " box active" : "box inactive"
        }
        onClick={() => setVisibility("SHOW_COMPLETED")}
      >
        Completed
      </div>
      <div
        className={
          filterBy === "SHOW_INCOMPLETED" ? " box active" : "box inactive"
        }
        onClick={() => setVisibility("SHOW_INCOMPLETED")}
      >
        InCompleted
      </div>
    </div>
  );
};
export default FilterLink;
