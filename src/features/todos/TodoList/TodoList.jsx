import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import TodoListItem from '../TodoListItem';
import { useGetTodosQuery } from '../../api/apiSlice';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const handleSubmit = (e) => {
    // submit...
    setNewTodo('');
  };

  const newTodoForm = (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            autoComplete="off"
            id="todoField"
            placeholder="Enter a New Todo"
            variant="standard"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </>
  );

  let content;

  if (isLoading) {
    content = (
      <Grid container justifyContent="center">
        <CircularProgress />
      </Grid>
    );
  } else if (isSuccess) {
    content = (
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <TodoListItem {...todo} />
          </React.Fragment>
        ))}
      </List>
    );
  } else if (isError) {
    content = <Alert severity="error">{error}</Alert>;
  }

  return (
    <div className="todo-list">
      <div className="todo-list-hd">
        <div className="todo-list-hd-content">
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Todo List
          </Typography>
          {newTodoForm}
        </div>
      </div>
      <div className="todo-list-bd">{content}</div>
    </div>
  );
};

export default TodoList;
