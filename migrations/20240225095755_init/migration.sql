/*
  Warnings:

  - You are about to drop the column `serverId` on the `Channel` table. All the data in the column will be lost.
  - You are about to drop the `Conversation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_memberOneId_fkey";

-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_memberTwoId_fkey";

-- DropIndex
DROP INDEX "Channel_serverId_idx";

-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "serverId";

-- DropTable
DROP TABLE "Conversation";
