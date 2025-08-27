import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function checkAdmin() {
  console.log('🔍 Verificando dados do admin...');
  
  const admin = await prisma.admin.findUnique({
    where: { email: 'admin@api-lp.com' }
  });

  if (!admin) {
    console.log('❌ Admin não encontrado!');
    return;
  }

  console.log('✅ Admin encontrado:');
  console.log(`📧 Email: "${admin.email}"`);
  console.log(`👤 Nome: "${admin.name}"`);
  console.log(`🔑 Hash da senha: ${admin.password.substring(0, 20)}...`);
  console.log(`📅 Criado em: ${admin.createdAt}`);

  // Testar a senha padrão
  const senhasPossíveis = ['admin123', 'Admin123', 'ADMIN123', 'admin@123'];
  
  for (const senha of senhasPossíveis) {
    const isValid = await bcrypt.compare(senha, admin.password);
    console.log(`🔐 Testando senha "${senha}": ${isValid ? '✅ VÁLIDA' : '❌ Inválida'}`);
  }

  // Verificar se o hash está correto
  const novoHash = await bcrypt.hash('admin123', 12);
  console.log(`🆕 Novo hash para comparação: ${novoHash.substring(0, 20)}...`);
}

checkAdmin()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
