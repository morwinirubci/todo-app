import React, { useState } from "react";
import "../../../style.css";
import TaskEdit from "./TaskEdit";

function Task(props) {
  
  const [checkedTask, setCheckedTask] = useState(false);
  const [className, setClassName] = useState("");
  const [edit, setEdit] = useState(true);
  const [editTaskText, setTaskText] = useState(props.title);

  const onTaskChange = () => {
    setCheckedTask(!checkedTask);

    if (!checkedTask) {
      setClassName("completed");
    } else {
      setClassName("");
    }
  };

  const onEdit = () => {
    setEdit(false);
  };

  return (
    <>
      {!edit && (
        <TaskEdit
          edit={edit}
          setEdit={setEdit}
          title={props.title}
          setTask={props.setTask}
          editTaskText={editTaskText}
          setTaskText={setTaskText}
        />
      )}

      {edit && (
        <li id={props.id} className={className}>
          <div className="view">
            <input
              checked={checkedTask}
              className="toggle"
              type="checkbox"
              onClick={onTaskChange}
              editTask={props.editTask}
            />
            <label>
              <span className="description" >{editTaskText}</span>
              {/* <span className="created">created 5 minutes ago</span> */}
            </label>
            <button onClick={onEdit} className="icon icon-edit"></button>
            <button
              onClick={() => props.onRemove(props.id)}
              className="icon icon-destroy"
            ></button>
          </div>
        </li>
      )}
    </>
  );
}

export default Task;
