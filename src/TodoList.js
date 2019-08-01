import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props){
    const tasks = props.tasks.map(item => (
        <TodoItem item={item} key={item.title} DeleteTask={props.DeleteTask} SubmitTask={props.SubmitTask} />
      ));
      return (
    <table className="table"> 
    <tbody>{tasks}</tbody>
    </table>
    );
}

export default TodoList;