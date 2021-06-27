import styles from './modal.module.css';
import React,{ useState } from 'react';
function Form()
{
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [property, setProperty] = useState('');
    const [comment, setComment] =  useState('');
    

    function titleChangeHandler(e)
    {
      setTitle(e.target.value);
    }

    function statusChangeHandler(e)
    {
      setStatus(e.target.value);
    }

    function propertyChangeHandler(e)
    {
      setProperty(e.target.value);
    }

    function commentChangeHandler(e)
    {
        setComment(e.target.value);
    }

  function getDataHandler()
  {
    // const data = [{title : title, status : status, property: property, comment : comment}]
    localStorage.setItem(`userData`, [`title: ${title}, Status : ${status}, Property: ${property}, Comments : ${comment}`]);
  }

    return (
        <form onSubmit={(e) => {e.preventDefault();}}>
        <div className={styles.formclass}>
           <h1><input type="text" id={styles.heading} value={title} placeholder="Title" onChange={titleChangeHandler}/></h1>
           <div className={styles.status}>
               <h5>Status : </h5>
               <h5><input type="text" id={styles.taskstatus} placeholder="Enter Task Status" value={status} onChange={statusChangeHandler} /></h5>
           </div>
           <div>
               <textarea placeholder="+ Add Property" rows="4" cols="50" className={styles.textarea} value={property}  onChange={propertyChangeHandler} >

               </textarea>
           </div>
           <div>
               <textarea placeholder="Add Comment" rows="4" cols="50" className={styles.textarea} value={comment} onChange={commentChangeHandler} >

               </textarea>
           </div>
           <button type="button" onClick={getDataHandler}>
               Submit
           </button>
           {/* <button>
               Delete Task
           </button> */}
        </div>
        </form>
    )
}

export default Form;