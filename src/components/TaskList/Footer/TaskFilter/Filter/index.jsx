import React, { useState } from "react";

function Filter(props) {
  const [activeTab, setActiveTab] = useState(false);
  const [filterTab, setFilterTab] = useState("");

  const onFilterTabs = (e) => {

    let currentTab = e.currentTarget.id;

    setActiveTab(!activeTab);
    if (!activeTab) {
      setFilterTab("selected");
    } else if (currentTab !== props.id) {
      setFilterTab("");
    }
  };

  return (
    <>
      <li>
        <button
          onClick={onFilterTabs}
          id={props.id}
          className={filterTab}
        >
          {props.filterName}
        </button>
      </li>
    </>
  );
}

export default Filter;
