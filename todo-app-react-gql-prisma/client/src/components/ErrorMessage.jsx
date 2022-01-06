import React from 'react';
import { Message } from 'semantic-ui-react';

function ErrorMessage({ header = 'Error :(', message }) {
  return (
    <Message negative>
      <Message.Header>{header}</Message.Header>
      <p>{message}</p>
    </Message>
  );
}

export default ErrorMessage;
