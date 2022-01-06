const {prisma} = require('./generated/prisma-client');

// A `main` function so that we can use async/await
async function main() {  
  // Create a new task
  const newTask = await prisma.createTask({ text: 'Learn React' });
  console.log(`Created new task: ${newTask.text} (ID: ${newTask.id})`);

  // Read all tasks from the database and print them to the console
  const allTasks = await prisma.tasks();
  console.log('All Tasks:', allTasks);

  // Fetch single task
  const task = await prisma.task({ id: allTasks[0].id });
  console.log('Task:', task);

  // Filter task list
  const filteredTask = await prisma.tasks({
    where: {
      text: task.text,
    },
  });
  console.log('Filtered: ', filteredTask);

  // Update task to completed
  const updatedUser = await prisma.updateTask({
    where: { id: task.id },
    data: { completed: true },
  });
  console.log('Updated:', updatedUser);

  // Delete task
  const deletedTask = await prisma.deleteTask({ id: task.id });
  console.log('Deleted:', deletedTask);
}

main().catch(e => console.error(e));