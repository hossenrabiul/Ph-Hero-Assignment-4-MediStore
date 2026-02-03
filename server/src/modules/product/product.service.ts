import { prisma } from "../../lib/prisma";
import type { Product } from "../../types/product";

const create = async (sellerId: string, body: Product) => {
  const { name, description, image, stock, price, categoryId, bedge } = body;
  const data = {
    name,
    description,
    stock,
    price,
    categoryId,
    sellerId,
    image,
    bedge,
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
  brand,
  take,
  skip,
  sortBy,
  minPrice,
  maxPrice,
}: {
  search: string | undefined;
  category: string | undefined;
  brand: string | undefined;
  take: number;
  skip: number;
  sortBy: string;
  minPrice: number;
  maxPrice: number;
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
  if (category) {
    conditions.push({
      category: {
        name: category,
      },
    });
  }
  if (brand) {
    conditions.push({
      brand: brand,
    });
  }
  if (maxPrice > 0) {
    conditions.push({
      price: {
        gte: minPrice,
        lte: maxPrice,
      },
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
