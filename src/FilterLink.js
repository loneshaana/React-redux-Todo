import React from "react";

const FilterLink = ({ setVisibility }) => {
  return (
    <div>
      <div onClick={() => setVisibility("SHOW_ALL")}>All</div>
      <div onClick={() => setVisibility("SHOW_COMPLETED")}>Completed</div>
      <div onClick={() => setVisibility("SHOW_INCOMPLETED")}>InCompleted</div>
    </div>
  );
};
export default FilterLink;
