import React from 'react';
import { Icon, Header } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import gql from '../gql';

function TodoTitle() {
  const { loading, data } = useQuery(gql.Query.getAllTodos);
  let count = 0;
  if (!loading) count = data.todos.length;
  return (
    <Header as="h2" color="teal" textAlign="left">
      <Icon name="tasks" />
      Todo App ({count})
    </Header>
  );
}

export default TodoTitle;
