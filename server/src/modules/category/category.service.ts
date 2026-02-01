import { prisma } from "../../lib/prisma";

const create = async (name: string, description: string) => {
  const data = {
    name,
    description,
  };
  const category = await prisma.category.create({ data });
  return category;
};

const getAll = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

const update = async (
  id: string,
  data: { name?: string; description?: string },
) => {
  const category = await prisma.category.update({
    where: {
      id: id,
    },
    data: data,
  });

  return category;
};

export const categoryService = {
  create,
  update,
  getAll
};
