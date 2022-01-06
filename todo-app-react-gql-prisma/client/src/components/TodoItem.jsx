import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from '../gql';

function TodoItem(props) {
  const {
    todo: { id, text, completed = false }
  } = props;

  const [deleteTodo] = useMutation(gql.Mutation.deleteTodo, {
    update(cache, { data: { deleteTodo } }) {
      const { todos } = cache.readQuery({ query: gql.Query.getAllTodos });
      const remainder = todos.filter(todo => todo.id !== deleteTodo.id);
      cache.writeQuery({
        query: gql.Query.getAllTodos,
        data: { todos: remainder }
      });
    }
  });

  const [toggleTodo] = useMutation(gql.Mutation.toggleTodo);

  return (
    <>
      <Segment textAlign="left">
        <Icon
          color={completed ? 'teal' : 'grey'}
          name="check circle"
          size="large"
          onClick={() => {
            toggleTodo({
              variables: {
                id
              }
            });
          }}
        />
        {text}
        <Button
          floated="right"
          style={{ marginTop: '-8px' }}
          icon="delete"
          color="red"
          onClick={() => {
            deleteTodo({
              variables: {
                id
              }
            });
          }}
        />
      </Segment>
    </>
  );
}

export default TodoItem;
