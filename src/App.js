// frontend/src/App.js

import React, { Component } from "react";

import "./App.css";
import axios from "axios";
import TodoList from "./TodoList";
import DoneList from "./DoneList";
import AddForm from "./AddForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      todoList: []
    };
  }
  componentDidMount() {
    this.GetList();
  }

  GetList = () => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };
  DeleteTask = (task_id) =>{
    axios
      .delete(`http://localhost:8000/api/todos/${task_id}`)
      .then(res => this.GetList());
  };
  SubmitTask = item => {
    
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/todos/${item.id}/`, item)
        .then(res => this.GetList());
      return;
    }
    axios
      .post("http://localhost:8000/api/todos/", item)
      .then(res => this.GetList());
  };

  render() {
    return (
      <main className="content">
        <h1 className="text-black text-uppercase text-center my-4 header">
          Todo app
        </h1>
        <div className="row ">
          <div className="col-md-9 col-sm-10 mx-auto p-0">
            <div className="card p-3">
            
              <div className="">
              <AddForm  SubmitTask={this.SubmitTask} />

                
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm ">
                    <div className="card border-info mb-3">
                      <div className="card-header">TO DO</div>
                      <div className="card-body text-info">
                        
                        <div className="card-text">
                          
                          <TodoList tasks ={this.state.todoList} DeleteTask={this.DeleteTask} SubmitTask={this.SubmitTask} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm ">
                    <div className="card border-info mb-3">
                      <div className="card-header">DONE</div>
                      <div className="card-body text-info">
                        
                        <p className="card-text">
                           <DoneList tasks ={this.state.todoList} DeleteTask={this.DeleteTask} SubmitTask={this.SubmitTask} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default App;
