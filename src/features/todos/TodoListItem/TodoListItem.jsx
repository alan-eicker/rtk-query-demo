import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const TodoListItem = ({ id, completed = false, title = '' }) => (
  <>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        {completed ? (
          <CheckCircleIcon color="success" />
        ) : (
          <WarningRoundedIcon color="warning" />
        )}
      </ListItemAvatar>
      <ListItemText>{title}</ListItemText>
    </ListItem>
    <Divider variant="inset" component="li" />
  </>
);

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool,
  title: PropTypes.string,
};

export default TodoListItem;
