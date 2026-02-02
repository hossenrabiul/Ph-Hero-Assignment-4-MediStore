import { prisma } from "../../lib/prisma";

const viewAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const updateUser = async (userId: string, data) => {
  const updateUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: data,
  });

  return updateUser
};


export const userServices = {
  viewAllUsers,
  updateUser,
};
