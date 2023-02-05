import React, { useState } from "react";

function NewTaskForm(props) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    props.setTask((prev) => [
      ...prev,
      {
        id: props.task.length + 1,
        title: input,
      },
    ]);

    if (!input) {
      alert("Поле необходимо заполнить");

      props.setTask(
        props.task.filter((elem) => elem.title !== input
        )
      );
    }
  };
  return (
    <>
      <header class="header">
        <h1>todos</h1>
        <div className="new-task">
          <input
            class="new-todo"
            placeholder="enter a new task"
            autofocus
            value={input}
            onInput={(e) => setInput(e.target.value)}
          />
          <button onClick={() => handleClick()}>Add task</button>
        </div>
      </header>
    </>
  );
}

export default NewTaskForm;
