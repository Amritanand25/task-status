import Task from './Task'
import React, { useState } from 'react';
function TaskField()
{
    const [count, setCount] = useState(1);
    const [task, setNewTask] = useState([{newTask : <Task count={count} />}]);

    function AddNewTaskHandler()
    {
        setCount(count+1);
        setNewTask([...task, {newTask: <Task count={count} />}]);    
    }
   
    function dragOverHandler(e)
    {
     e.preventDefault();
    }

    

    return (
      <div className="taskfield" onDragOver={dragOverHandler} >
       <div className="heading">
       <h2>Our Task Board <span className="count" >{count}</span> </h2>
    
     </div>
         {
             task.map((item, i) => {
                return (
                   <div key={i} draggable = "true">{item.newTask}</div>
                );
              }) 
         }
         <div className="new-task-button">
            <button onClick={AddNewTaskHandler}>+ Add Task</button>
         </div>
      </div>
    )
}

export default TaskField;