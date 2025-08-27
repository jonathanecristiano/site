import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seeding...');

  // Configurações do admin padrão
  const adminEmail = 'admin@api-lp.com';
  const adminPassword = 'admin123'; // Altere esta senha em produção
  const adminName = 'Administrador';

  // Verificar se o admin já existe
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log('✅ Admin já existe no banco de dados');
    console.log(`📧 Email: ${existingAdmin.email}`);
    console.log(`👤 Nome: ${existingAdmin.name}`);
    return;
  }

  // Criptografar a senha
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);

  // Criar o admin
  const admin = await prisma.admin.create({
    data: {
      email: adminEmail,
      password: hashedPassword,
      name: adminName,
    },
  });

  console.log('✅ Admin criado com sucesso!');
  console.log(`📧 Email: ${admin.email}`);
  console.log(`👤 Nome: ${admin.name}`);
  console.log(`🔑 Senha: ${adminPassword} (altere em produção!)`);
  console.log(`🆔 ID: ${admin.id}`);
  console.log(`📅 Criado em: ${admin.createdAt}`);

  // Criar um link de vídeo padrão se não existir
  const existingVideoLink = await prisma.videoLink.findUnique({
    where: { id: 1 },
  });

  if (!existingVideoLink) {
    const videoLink = await prisma.videoLink.create({
      data: {
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
    });
    console.log('🎥 Link de vídeo padrão criado:', videoLink.link);
  }

  // Criar algumas datas de exemplo se não existirem
  const existingDatas = await prisma.datas.count();
  
  if (existingDatas === 0) {
    const sampleDatas = [
      {
        day: '15',
        month: 'Janeiro',
        location: 'Centro de Convenções',
        city: 'São Paulo',
        linkbuy: 'https://example.com/buy/sp',
      },
      {
        day: '22',
        month: 'Janeiro',
        location: 'Arena Events',
        city: 'Rio de Janeiro',
        linkbuy: 'https://example.com/buy/rj',
      },
      {
        day: '30',
        month: 'Janeiro',
        location: 'Expo Center',
        city: 'Belo Horizonte',
        linkbuy: 'https://example.com/buy/bh',
      },
    ];

    for (const data of sampleDatas) {
      await prisma.datas.create({ data });
    }
    
    console.log(`📅 ${sampleDatas.length} datas de exemplo criadas`);
  }

  console.log('🎉 Seeding concluído!');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
