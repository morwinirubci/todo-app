import React from "react";
import Footer from "./Footer";
import Task from "./Task";

function TaskList(props) {



  const TaskElement = props.task.map((elem) => {
    return (
      <Task
        title={elem.title}
        key={elem.id}
        id={elem.id}
        onRemove={props.onRemove}
        task={props.task}
        setTask={props.setTask}
        editTask={props.editTask}
      />
    );
  });

  return (
    <>
      <section className="main">
        <ul className="todo-list">{TaskElement}</ul>
        <Footer/>
      </section>
    </>
  );
}

export default TaskList;
