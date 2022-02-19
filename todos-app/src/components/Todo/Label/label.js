import "/home/eba/react/todoapp/src/components/Todo/Form/form.css"

const Label = ({tasks,setTasks}) => {
    
    const deleteTask = (task) => {
        setTasks(tasks.filter((item)=>{
            return !item.toString().toLowerCase().includes(task.toLowerCase())
        }));
    }

return <div className="form">
      <ul>
        {tasks.map((task,index)=>{
            return <span key={index}>
                <li >{task}</li>
                <button onClick={()=>deleteTask(task)}>DELETE</button>
                </span>
        })}
      </ul>
  </div>;
};

export default Label;