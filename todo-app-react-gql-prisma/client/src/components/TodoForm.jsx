import React, { useState } from 'react';
import { Form, Message } from 'semantic-ui-react';
import gql from '../gql';
import { useMutation } from '@apollo/react-hooks';

function TodoForm() {
  const [text, setText] = useState('');
  const [isWarning, setIsWarning] = useState(false);

  const [addTodo] = useMutation(gql.Mutation.addTodo, {
    update(cache, { data: { addTodo } }) {
      const { todos } = cache.readQuery({ query: gql.Query.getAllTodos });
      cache.writeQuery({
        query: gql.Query.getAllTodos,
        data: { todos: [...todos, addTodo] }
      });
    }
  });

  const handleChange = e => {
    setIsWarning(false);
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      return setIsWarning(true);
    }
    addTodo({ variables: { text } });
    setText('');
  };

  return (
    <Form warning onSubmit={handleSubmit}>
      <Form.Field>
        <Form.Input
          placeholder="What needs to be done?"
          name="text"
          value={text}
          onChange={handleChange}
        />
      </Form.Field>
      {isWarning && <Message warning header="Please input something!" />}
    </Form>
  );
}

export default TodoForm;
