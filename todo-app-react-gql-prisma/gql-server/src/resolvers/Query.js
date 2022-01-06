const Query = {
  tasks: (parent, { search }, { prisma }, info) =>
    prisma.tasks({
      where: {
        text_contains: search,
      },
    }),
  task: (parent, { id }, { prisma }, info) => prisma.task({ id }),
};

export { Query };
