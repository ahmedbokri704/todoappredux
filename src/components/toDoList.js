import React, { useState } from 'react';
import { connect } from 'react-redux';
import {deleteTodo, completeTodo,editTodo,saveTodo} from '../Actions/action';

function TodoList(props) {

    const [newText, setNewText] = useState('')
    
    return (
        <div>
            {props.list.map((element) => (
                <div className="list">


                    {(element.edit) ? (<div> <input className="paragraphe" type="text" value={newText} onChange={(event) => setNewText(event.target.value)} /> <button className="save" onClick={() => props.saveTodo({ id: element.id, text: newText })}>Save </button></div>)
                        : (<div>
                            <p style={{ textDecoration: (element.iscompleted) && 'line-through' }}>{element.text} </p>

                            <button className="delete" onClick={() => props.deleteTodo(element.id)} >Delete</button>
                            <button className="save" onClick={() => props.completeTodo(element.id)}>
                                {(element.iscompleted) ? 'undo' : 'complete'} </button>
                            <button className="edit" onClick={() => { props.editTodo(element.id); setNewText(element.text) }}> Edit </button>

                        </div>
                        )}
                </div>
            ))}


        </div>
    );
}

const mapStateProps = (state) => ({
    list: state.todolist
})


export default connect(mapStateProps, { deleteTodo, completeTodo, saveTodo, editTodo })(TodoList)