import React from "react";
class UpdateForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: this.props.task_title, create:this.props.create};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    //  alert('A name was submitted: ' + this.state.value);
     // this.props.add(this.state.value);
    const item={
        id:this.props.task_id,
       title: this.state.value,
       completed: false,
     }
     this.props.UpdateTask(item);
      event.preventDefault();
      this.setState({value: "", create:true});
     this.props.toggleCreate();
    }
    
  
    render() {
      return (
        <form className= "form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group mb-2"> 
        
            
            <input className="form-control" type="text" value={this.state.value} placeholder={"Task Title"} onChange={this.handleChange} />
           </div>
         
          <div className="form-group mx-sm-3 mb-2"> 
          <input type="submit" value="Update Task" className="btn btn-info" />
          </div>
        </form>
      );
    }
  }
  export default UpdateForm;