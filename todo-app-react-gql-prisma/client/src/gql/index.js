import { gql } from 'apollo-boost';

export default {
  Query: {
    getAllTodos: gql`
      query fetchAllTasks {
        todos: tasks {
          id
          text
          completed
        }
      }
    `
  },
  Mutation: {
    addTodo: gql`
      mutation addTask($text: String!) {
        addTodo: createTask(text: $text) {
          id
          text
          completed
        }
      }
    `,
    deleteTodo: gql`
      mutation deleteTask($id: ID!) {
        deleteTodo: deleteTask(id: $id) {
          id
          text
          completed
        }
      }
    `,
    toggleTodo: gql`
      mutation toggleTask($id: ID!) {
        toggleTodo: toggleTask(id: $id) {
          id
          text
          completed
        }
      }
    `
  }
};
