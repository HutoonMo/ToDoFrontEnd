import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props){
    const toDoTasks=props.tasks.filter(i => !i.completed);
    const tasks = toDoTasks.map(item => (
        <TodoItem item={item} key={item.title} DeleteTask={props.DeleteTask} SubmitTask={props.SubmitTask} UpdateTask={props.UpdateTask} />
      ));
      return (
    <table className="table"> 
    <tbody>{tasks}</tbody>
    </table>
    );
}

export default TodoList;