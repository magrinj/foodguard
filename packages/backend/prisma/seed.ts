import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create system user for AI-generated content if it doesn't exist
  const systemUser = await prisma.user.upsert({
    where: {
      id: 'system'
    },
    update: {},
    create: {
      id: 'system',
      email: 'system@foodguard.app',
      name: 'FoodGuard AI',
      isAnonymous: true
    }
  });

  console.log('Seeded system user:', systemUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 