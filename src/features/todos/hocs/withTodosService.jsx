import React from 'react';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { todosApi } from '../services/todosApi';

const withTodosService = (Component) => (props) =>
  (
    <ApiProvider api={todosApi}>
      <Component {...props} />
    </ApiProvider>
  );

export default withTodosService;
