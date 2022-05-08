import { Welcome } from "@prisma/client";
import { db } from "libs/prisma";

export const getWelcomeMessage = async () => {
  return await db.welcome.findFirst();
};

export const createWelcomeMessage = async (data: Welcome) => {
  return await db.welcome.create({
    data,
  });
};
