import React, { Component } from "react";
import Octicon, {X, Check,Trashcan,Pencil} from '@primer/octicons-react'
class TodoItem extends Component {
    state = {
        completed: this.props.item.completed
        // tasks: tasks
      };
      render() {
        const task = this.props.item;
        const statusIcon = () => {
            if (this.state.completed) {
              return Check;
            } else {
              return X;
            }
          };
          const toggleStatus = () => {
            // item.done = !item.done;
            // this.state.done = !this.state.done;
            //console.log("CLICKED")
            this.setState({ completed: !this.state.completed });
            task.completed= !task.completed;
            this.props.SubmitTask(task);
          };

        return (
            <tr className="row"> 
               
        <td>
        <i onClick={toggleStatus}  >  <Octicon  icon={statusIcon()}/></i>
        
        </td>
        <td> {task.title} </td>
       <td>  <i onClick={() => this.props.UpdateTask(task)}> <Octicon  icon={Pencil}/> </i> </td>
       <td>  <i onClick={() => this.props.DeleteTask(task.id)} > <Octicon  icon={Trashcan}/> </i> </td>
        </tr>
        );
      }
}

export default TodoItem;