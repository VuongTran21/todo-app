import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import db from '../firebase';
import '../css/Todo.css';

function Todo({todo}) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={todo.todo} />
        <Button
          onClick={event => db.collection('todos').doc(todo.id).delete()}
        >Delete me</Button>
      </ListItem>
    </List>
  );
}

export default Todo;
