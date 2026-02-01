/*
  Warnings:

  - A unique constraint covering the columns `[orderId,medicineId]` on the table `OrderItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `quantity` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "OrderItem_medicineId_key";

-- DropIndex
DROP INDEX "OrderItem_orderId_key";

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "quantity" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_orderId_medicineId_key" ON "OrderItem"("orderId", "medicineId");
