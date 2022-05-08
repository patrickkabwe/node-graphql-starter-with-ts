import { db } from "libs/prisma";

const seed = async () => {
  await db.welcome.create({
    data: {
      message: "Welcome to Demo Fastify Prisma and Apollo Server app! 🚀",
    },
  });
};

seed();
