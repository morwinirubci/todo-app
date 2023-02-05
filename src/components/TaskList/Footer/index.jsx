import React from "react";
import TaskFilter from "./TaskFilter";

function Footer(props) {
  return (
    <>
      <footer class="footer">
        <span class="todo-count">1 items left</span>
        <ul class="filters">
         <TaskFilter/>
        </ul>
        <button class="clear-completed">Clear completed</button>
      </footer>
    </>
  );
}

export default Footer;
