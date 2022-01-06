import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const QUERY_ALL_TASKS = gql`
  query fetchAllTasks {
    tasks {
      id
      text
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(QUERY_ALL_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Segment.Group raised>
        {data.tasks.map(({ id, text }) => (
          <Segment key={id}>{text}</Segment>
        ))}
      </Segment.Group>
    </Container>
  );
}

export default App;
