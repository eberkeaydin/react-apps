import {useState} from "react";
import "/home/eba/react/todoapp/src/components/Todo/Form/form.css"

const initialValue = "";

const Form = ({tasks,setTasks}) => {

  const [task,setTask] = useState(initialValue);

  const onSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks,task]);
    setTask(initialValue);
  }

  return <div className="form">
      <h2>TODOS</h2>
      <p>Enter your jobs that will be done !</p>
      <form onSubmit={onSubmit}>
        <input 
        name="task" 
        placeholder="What needs to be done?"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        />
        <button className="btn">Add todo</button>  
      </form>
  </div>;
};

export default Form;