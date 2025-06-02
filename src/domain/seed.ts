import bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const user = await prisma.users.upsert({
    where: { email: 'admin@university.com' },
    update: {},
    create: {
      name: 'root',
      email: 'admin@university.com',
      password: hashedPassword,
    },
  });

  console.log('Admin seeded:', user);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
