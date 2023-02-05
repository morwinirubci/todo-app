import React, { useRef, useState } from "react";
import "../../../../style.css";

function TaskEdit(props) {
 


  const onEditTextField = (e) =>{
  
    props.setTaskText(e.target.value);

  }
 
  return (
    <>
      <li class="editing">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>
            <span class="description">Editing task</span>
            <span class="created">created 5 minutes ago</span>
          </label>
          <button class="icon icon-edit"></button>
          <button class="icon icon-destroy"></button>
        </div>
        <input
          onChange={onEditTextField}
          onBlur={() => { props.setEdit(true)}}
          type="text"
          class="edit"
          value={props.editTaskText}
          autoFocus
        />
      </li>
    </>
  );
}

export default TaskEdit;
