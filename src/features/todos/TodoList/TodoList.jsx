import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TodoListItem from '../TodoListItem';
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from '../../../api/apiSlice';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: uuid(), title: newTodo, completed: false });
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
      <>
        {todos.length === 0 ? (
          'You have no todos.'
        ) : (
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {Array.from(todos).map((todo, index) => (
              <React.Fragment key={todo.id}>
                <TodoListItem
                  isLast={index === todos.length - 1}
                  onUpdate={(todo) => updateTodo(todo)}
                  onDelete={(id) => deleteTodo({ id })}
                  {...todo}
                />
              </React.Fragment>
            ))}
          </List>
        )}
      </>
    );
  } else if (isError) {
    content = <Alert severity="error">{error}</Alert>;
  }

  return (
    <>
      <Box sx={{ backgroundColor: '#14181f', color: '#fff', p: '30px' }}>
        <Box sx={{ maxWidth: 768, m: '0 auto' }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Todo List
          </Typography>
          {newTodoForm}
        </Box>
      </Box>
      <Paper elevation={0} sx={{ maxWidth: 768, m: '30px auto' }}>
        {content}
      </Paper>
    </>
  );
};

export default TodoList;
