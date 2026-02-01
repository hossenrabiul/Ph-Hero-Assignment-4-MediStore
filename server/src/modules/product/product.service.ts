import { prisma } from "../../lib/prisma";
import type { Product } from "../../types/product";

const create = async (sellerId: string, body: Product) => {
  const { name, stock, price, categoryId } = body;
  const data = {
    name,
    // description,
    stock,
    price,
    categoryId,
    sellerId,
  };
  const product = await prisma.medicine.create({ data });

  return product;
};

const update = async (id: string, data: Product) => {
  const result = await prisma.medicine.update({
    where: {
      id: id,
    },
    data: data,
  });
  return result;
};

const deleteById = async (id: string) => {
  const result = await prisma.medicine.delete({
    where: {
      id: id,
    },
  });

  return result;
};

const getAll = async ({
  search,
  category,
  take,
  skip,
  sortBy,
}: {
  search: string | undefined;
  category: string | undefined;
  take: number;
  skip: number;
  sortBy: string;
}) => {
  const conditions = [];
  if (search) {
    conditions.push({
      OR: [
        {
          name: {
            contains: search as string,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  const result = await prisma.medicine.findMany({
    take: take,
    skip: skip,
    where: {
      AND: conditions,
    },
    orderBy: {
      [sortBy]: {
        name: "asc",
      },
      // category: 'asc'
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return result;
};

const getById = async (id: string) => {
  const result = await prisma.medicine.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

export const productService = {
  create,
  update,
  deleteById,
  getAll,
  getById,
};
