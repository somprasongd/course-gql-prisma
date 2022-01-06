const Mutation = {
  createTask: (root, { text }, { prisma }, info) => prisma.createTask({ text }),
  toggleTask: async (root, { id }, { prisma }, info) => {
    const taskToUpdate = await prisma.task({ id });
    return prisma.updateTask({
      where: { id },
      data: {
        completed: !taskToUpdate.completed,
      },
    });
  },
  deleteTask: (root, { id }, { prisma }, info) => prisma.deleteTask({ id }),
};

export { Mutation };
