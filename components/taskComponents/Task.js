import React,{useRef, useState} from "react";
import styles from "../modal/modal.module.css";
import Form from '../modal/Form'

export default function Task() {
    const idRef = useRef(null);
    const [localData, setLocalData] = useState("Task");

    function taskHandlerModal()
    {
        idRef.current.style.display = "block";
    }
   function closeHandler()
   {
     idRef.current.style.display = "none";
     let userData = localStorage.getItem('userData');
     let str=''
     if(userData !== '')
     {
       for(let i=0; i<userData.length; i++)
       {
         if(userData[i] === ',')
         {
           break;
         }else{
           str = str + userData[i];
         }

       }
       let finalTitle = '';
       let idx = 0;
       for(let i=0; str.length; i++)
       {
         if(str[i] === ':'){
           idx = i;
           break;
         }
       }

       for(let i= idx+1; i<str.length; i++)
       {
         finalTitle = finalTitle + str[i];
       }
       setLocalData(finalTitle);
     }
   }

    function dragStartHandler()
    {
        console.log("Start");
    }


  return (
    <div>
      <div className="task" onClick={taskHandlerModal} draggable="true" onDragStart={dragStartHandler}>
        <h3>{localData}</h3>
      </div>
      <div id={styles.myModal} ref={idRef} className={styles.modal}>
        <div className={styles.content}>
          <span className={styles.close} onClick={closeHandler}>&times;</span>
          <Form />
        </div>
      </div>
    </div>
  );
}
