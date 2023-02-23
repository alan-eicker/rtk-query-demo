import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

const TodoListItem = ({
  id,
  completed = false,
  isLast = false,
  title = '',
  onUpdate = () => {},
  onDelete = () => {},
}) => (
  <>
    <ListItem alignItems="center">
      <ListItemAvatar sx={{ mt: 0 }}>
        <Checkbox
          sx={{ p: 0 }}
          checked={completed}
          onChange={() => onUpdate({ id, title, completed: !completed })}
        />
      </ListItemAvatar>
      <ListItemText sx={{ mt: 0 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>{title}</Grid>
          <Grid item>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </Grid>
        </Grid>
      </ListItemText>
    </ListItem>
    {!isLast && <Divider variant="inset" component="li" />}
  </>
);

TodoListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  completed: PropTypes.bool,
  isLast: PropTypes.bool,
  title: PropTypes.string,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TodoListItem;
