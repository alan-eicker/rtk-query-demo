import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const TodoListItem = ({
  id,
  completed = false,
  isLast = false,
  title = '',
  onUpdate = () => {},
  onDelete = () => {},
}) => (
  <>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        {completed ? (
          <CheckCircleIcon color="success" />
        ) : (
          <WarningRoundedIcon color="warning" />
        )}
      </ListItemAvatar>
      <ListItemText>
        <Grid container justifyContent="space-between">
          <Grid item>{title}</Grid>
          <Grid item>
            <Checkbox
              checked={completed}
              onChange={() => onUpdate({ id, title, completed: !completed })}
            />
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
