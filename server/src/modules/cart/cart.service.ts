import { OrderStatus } from "../../constants/productStatus";
import { prisma } from "../../lib/prisma";

const addToCart = async (customerId: string, medicineId: string) => {
  const existOrder = await prisma.order.findFirst({
    where: {
      customerId: customerId as string,
      status: OrderStatus.PENDING,
    },
  });

  const data = {
    customerId,
    totalAmount: 0,
  };
  if (!existOrder) {
    const orderResult = await prisma.order.create({ data });

    const orderItemResult = await prisma.orderItem.create({
      data: {
        orderId: orderResult.id,
        medicineId: medicineId,
        quantity: 1,
      },
    });
  } else {
    const existingItem = await prisma.orderItem.findFirst({
      where: {
        orderId: existOrder.id,
        medicineId: medicineId,
      },
    });

    if (existingItem) {
      const result = await prisma.orderItem.update({
        where: {
          id: existingItem.id as string,
        },
        data: {
          quantity: {
            increment: 1,
          },
        },
      });
    } else {
      const result = await prisma.orderItem.create({
        data: {
          orderId: existOrder.id,
          medicineId: medicineId,
          quantity: 1,
        },
      });
    }
  }
};

export const cartServices = {
  addToCart,
};
