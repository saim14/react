import React , { useState, useEffect } from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import Todo from './Todo'
import {db} from './firebase'
import firebase from "firebase";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect( () => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
    })
  }, []); 

  const addTodo = (event) => {
    console.log('Button is clicked!')
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input ]); 
    setInput('')
  }

  return (
    <center>
    <div className="app">
      <h2>Todo App </h2>
      <form className='app__form'>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} variant='contained' color='primary' type='submit'onClick={addTodo}>
          Add Item
        </Button>

        <ul className='todo_items'>
          {todos.map( todo => (
            <Todo todo={todo}/>
          ))}
        </ul>
      </form>
      
    </div>
    </center>
  );
}

export default App;
