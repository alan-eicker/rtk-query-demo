import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    // submit...
    setNewTodo('');
  };

  const newTodoForm = (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              id="todoField"
              label="Enter a New Todo"
              variant="standard"
              value={newTodo}
              sx={{ width: '100%' }}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );

  let content;

  return (
    <main>
      <Typography variant="h4" component="div" sx={{ mb: 2 }}>
        Todo List
      </Typography>
      {newTodoForm}
      {content && (
        <Card>
          <CardContent>{content}</CardContent>
        </Card>
      )}
    </main>
  );
};

export default TodoList;
