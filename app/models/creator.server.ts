import { prisma } from "~/db.server";

export async function createCreator(name: string, email: string) {
  return prisma.creator.create({
    data: { name, email },
  });
}

export async function getCreatorByEmail(email: string) {
  return prisma.creator.findUnique({
    where: { email },
  });
}
