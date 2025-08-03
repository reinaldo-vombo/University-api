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
  await prisma.exameFase.createMany({
    data: [
      {
        name: 'Fase 1',
        ordem: 1,
        startDate: new Date('2025-08-01'),
        endDate: new Date('2025-08-10'),
      },
      {
        name: 'Fase 2',
        ordem: 2,
        startDate: new Date('2025-08-11'),
        endDate: new Date('2025-08-20'),
      },
      {
        name: 'Fase 3',
        ordem: 3,
        startDate: new Date('2025-08-21'),
        endDate: new Date('2025-08-30'),
      },
    ],
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
