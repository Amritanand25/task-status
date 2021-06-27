import Body from './Body'
import TaskField from './TaskField';
import React, { useState, useEffect } from 'react'

function Wrapper()
{
   
    const [task, setTask] = useState([{taskName: <TaskField />}]);

    function AddHandler(){
        setTask([...task, {taskName: <TaskField />}]);
    }


    const handleRemoveClick = index => {
        let list = [...task];
         list.splice(index, 1);
        
        setTask(list);
      };

    return (
        <div>
        <Body/>
        <div className="wrapper">
          {
              task.map((item, i) => {
                return (
                    <div key={i.toString()}>
                    <div key={i} id={i} className="card">{item.taskName}<span key={i+200*100} onClick={ () => handleRemoveClick(i) } className="deletion-cross">X</span> </div>
                    </div>
                );
              })
          }
          <div className="new-task-button center-class">
        <button onClick={AddHandler}>+ Add Group</button>

          </div>
        </div>
        </div>
    )
}

export default Wrapper;
