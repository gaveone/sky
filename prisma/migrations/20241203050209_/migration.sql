/*
  Warnings:

  - A unique constraint covering the columns `[UserIdNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `UserIdNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordHash` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skyemail` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'TEACHER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "UserIdNumber" BIGINT NOT NULL,
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "certification" TEXT,
ADD COLUMN     "course" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "emergencyContact" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "guardianContact" TEXT,
ADD COLUMN     "guardianName" TEXT,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "passwordHash" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'STUDENT',
ADD COLUMN     "skyemail" TEXT NOT NULL,
ADD COLUMN     "year" TEXT,
ADD COLUMN     "yearsOfExperience" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_UserIdNumber_key" ON "User"("UserIdNumber");
