import { useEffect, useState } from "react";
import Form from "./components/Todo/Form/form";
import Label from "./components/Todo/Label/label";




function App() {

  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
    console.log(tasks);
  },[tasks])

  return (
    <div>
      <Form setTasks={setTasks} tasks={tasks}/>      
      <Label setTasks={setTasks} tasks={tasks}/> 
    </div>
  );
}

export default App;