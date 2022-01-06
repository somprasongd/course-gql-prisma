import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from '../gql';
import { Loader, Message } from 'semantic-ui-react';
import ErrorMessage from './ErrorMessage';
import TodoItem from './TodoItem';

function TodoList() {
  const { loading, error, data } = useQuery(gql.Query.getAllTodos);
  if (loading) return <Loader active inline="centered" />;
  if (error) return <ErrorMessage message={error.message} />;

  const { todos } = data;
  const count = todos.length;

  const component =
    count === 0 ? (
      <Message success compact header="Hooray🎉 🎉 🎉 All Done 😆" />
    ) : (
      <>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </>
    );
  return component;
}

export default TodoList;
