import React , {useState} from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../Actions/action';

function NewTodo(props) {
    const [newtodo, setNewtodo] = useState('')
    const addNewtodo = () =>{
        props.addTodo({
            id: Math.random(),
            text: newtodo,
            isCompleted: false,
            edit : false
        })
        setNewtodo('')
    }

     return (
       <header className="New">
       <h1>Daily Todo Lists</h1>
       
           <label className="New">
               <p className="text1" >Add your To-Do :</p> 
               <input className="space" type="text" placeholder="Entrer new Todo"
               value={newtodo}
               onChange={(event)=> setNewtodo(event.target.value)}
               id="newtodo"   />
               <button className="addbtn" onClick = {() => addNewtodo()} > add</button>
 
           </label>
         
   </header>
     );
   }
   
   export default connect (null,{addTodo})(NewTodo)