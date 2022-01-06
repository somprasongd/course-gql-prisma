import React from 'react';
import { Grid } from 'semantic-ui-react';
import TodoTitle from './TodoTitle';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
  return (
    <Grid
      textAlign="center"
      style={{ height: '100vh', marginTop: '25px' }}
      verticalAlign="top"
    >
      <Grid.Column style={{ maxWidth: 600 }}>
        <TodoTitle count={0} />
        <TodoForm />
        <TodoList />
      </Grid.Column>
    </Grid>
  );
}

export default Todo;
