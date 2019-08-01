import React from "react";
import TodoItem from "./TodoItem";

function DoneList(props){
    const DoneTasks=props.tasks.filter(i => i.completed);
    const tasks = DoneTasks.map(item => (
        <TodoItem item={item} key={item.title} DeleteTask={props.DeleteTask} SubmitTask={props.SubmitTask} />
      ));
      return (
    <table className="table"> 
    <tbody>{tasks}</tbody>
    </table>
    );
}

export default DoneList;