import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("PostgreSQL connected with Prisma");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export { connectDB, prisma }
