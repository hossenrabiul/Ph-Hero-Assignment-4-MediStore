import { OrderStatus } from "../../constants/productStatus";
import { prisma } from "../../lib/prisma";

const addToCart = async (customerId: string, medicineId: string) => {
  // check if the order exist
  const existOrder = await prisma.order.findFirst({
    where: {
      customerId: customerId as string,
      status: OrderStatus.PENDING,
    },
  });
  // console.log("order",existOrder)
  const medicine = await prisma.medicine.findUnique({
    where: {
      id: medicineId,
    },
  });
  // console.log("first")
  if (!medicine) {
    throw new Error("No Product found");
  }
  const data = {
    customerId,
    totalAmount: medicine?.price,
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

    return { orderResult, orderItemResult };
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

      const allOrders = await prisma.orderItem.findMany({
        where: {
          orderId: existOrder.id,
        },
        include: {
          medicine: true,
        },
      });

      const totalAmount = allOrders.reduce(
        (sum, item) => sum + item?.medicine?.price * item.quantity,
        0,
      );

      const updateOrder = await prisma.order.update({
        where: {
          id: existOrder.id,
        },
        data: {
          totalAmount,
        },
      });

      return { result, updateOrder };
    } else {
      const result = await prisma.orderItem.create({
        data: {
          orderId: existOrder.id,
          medicineId: medicineId,
          quantity: 1,
        },
      });

      const allOrders = await prisma.orderItem.findMany({
        where: {
          orderId: existOrder.id,
        },
        include: {
          medicine: true,
        },
      });

      const totalAmount = allOrders.reduce(
        (sum, item) => sum + item?.medicine?.price * item.quantity,
        0,
      );

      const updateOrder = await prisma.order.update({
        where: {
          id: existOrder.id,
        },
        data: {
          totalAmount,
        },
      });
      return { result, updateOrder };
    }
  }
};

const getCart = async (customerId: string) => {
  console.log("from cart service", customerId);
  const cart = await prisma.order.findFirst({
    where: {
      customerId: customerId,
      status: OrderStatus.PENDING,
    },
    include: {
      orterItem: {
        select: {
          medicine: true,
        },
      },
    },
  });

  return cart;
};

export const cartServices = {
  addToCart,
  getCart,
};
