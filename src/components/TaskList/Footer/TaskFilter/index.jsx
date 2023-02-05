import React, { useState } from "react";
import Filter from "./Filter";

const filterItems = [
  { id: 1, filter: "All" },
  { id: 2, filter: "Active" },
  { id: 3, filter: "Completed" },
];

function TaskFilter(props) {
  const [filter, setFilter] = useState(filterItems);



 


  const filterElement = filter.map((elem) => (
    <Filter
      id={elem.id}
      filterName={elem.filter}
      selected={elem.selected}

    />
  ));

  return <>{filterElement}</>;
}

export default TaskFilter;
