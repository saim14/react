import React ,{useState} from 'react'
import './Todo.css'
import {List, ListItem, ListItemText, Button, FormControl, InputLabel, Input} from '@material-ui/core'
import {db} from "./firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Modal} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '30%' ,
    left: '25%',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.todo);

  const handleOpen = (event) =>{
    event.preventDefault();
    setOpen(true);
    setInput(props.todo.todo);
  }

  const updateTodo = (event) => {
    event.preventDefault();
    
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, {merge: true})
    setOpen(false);

  }

  return (
    <div className="todo">

      <Modal
        open={open}
        onClose={e => setOpen(false)}
      >
        <div className={classes.paper}>
          <form className='todoModal__form'>
            <FormControl>
              <InputLabel>Edit todo</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)}/>
            </FormControl>
            <Button type="submit" disabled={!input} onClick= {updateTodo}>Update</Button>
          </form>
        </div>

      </Modal>

      <List className="todo__info">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="No deadline"/>
        </ListItem>
        <Button onClick={handleOpen}>Edit</Button>

        <DeleteForeverIcon className='todo__delete' onClick = { event => db.collection('todos').doc(props.todo.id).delete()} />
      </List>

    </div>
  )
}

export default Todo;
