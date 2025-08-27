# 🔐 Sistema de Administração - API LP

Este documento descreve o sistema de administração criado para a API LP, incluindo autenticação, gerenciamento de admins e como usar o seeder.

## 📊 Modelo de Dados do Admin

```typescript
model Admin {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String   // Hash BCrypt
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🌱 Seeder

### Executando o Seeder

Para criar o admin padrão e dados de exemplo:

```bash
yarn db:seed
```

### Admin Padrão Criado

- **Email**: `admin@api-lp.com`
- **Senha**: `admin123` (⚠️ **ALTERE EM PRODUÇÃO!**)
- **Nome**: `Administrador`

### Dados de Exemplo

O seeder também cria:
- 1 link de vídeo padrão
- 3 datas de exemplo com diferentes cidades
- Verificações para não duplicar dados

## 🔑 Autenticação

### Login

**POST** `/api/admin/login`

```json
{
  "email": "admin@api-lp.com",
  "password": "admin123"
}
```

**Resposta de Sucesso (200):**
```json
{
  "message": "Login realizado com sucesso",
  "admin": {
    "id": 1,
    "email": "admin@api-lp.com",
    "name": "Administrador",
    "createdAt": "2025-08-05T01:12:41.263Z",
    "updatedAt": "2025-08-05T01:12:41.263Z"
  }
}
```

**Resposta de Erro (401):**
```json
{
  "message": "Credenciais inválidas"
}
```

## 👥 Gerenciamento de Admins

### Listar Admins

**GET** `/api/admin`

Retorna todos os admins (sem senhas).

### Buscar Admin por ID

**GET** `/api/admin/:id`

### Criar Novo Admin

**POST** `/api/admin`

```json
{
  "email": "novo@admin.com",
  "password": "senha123",
  "name": "Novo Admin"
}
```

**Validações:**
- Email deve ser único
- Senha mínima de 6 caracteres
- Nome obrigatório

### Atualizar Admin

**PUT** `/api/admin/:id`

```json
{
  "email": "novoemail@admin.com",  // Opcional
  "password": "novasenha123",      // Opcional
  "name": "Novo Nome"              // Opcional
}
```

**Observações:**
- Campos opcionais
- Email deve ser único se fornecido
- Senha será automaticamente criptografada

### Deletar Admin

**DELETE** `/api/admin/:id`

**Proteções:**
- Não permite deletar o último admin do sistema
- Retorna erro 400 se tentar deletar o último admin

## 🔒 Segurança

### Hash de Senhas

- Utiliza **BCrypt** com salt rounds = 12
- Senhas nunca são retornadas nas respostas da API
- Hash automático na criação e atualização

### Validações

- **Email**: Formato válido e único
- **Senha**: Mínimo 6 caracteres
- **Nome**: Campo obrigatório

## 📋 Scripts Disponíveis

```bash
# Executar seeder
yarn db:seed

# Gerar cliente Prisma
yarn db:generate

# Aplicar schema ao banco
yarn db:push

# Criar migração
yarn db:migrate

# Resetar banco
yarn db:reset

# Abrir Prisma Studio
yarn db:studio
```

## 🧪 Testando as APIs

### Exemplo com PowerShell (Windows)

```powershell
# Login
Invoke-WebRequest -Uri "http://localhost:3000/api/admin/login" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"email":"admin@api-lp.com","password":"admin123"}'

# Listar admins
Invoke-WebRequest -Uri "http://localhost:3000/api/admin" -Method GET

# Criar novo admin
Invoke-WebRequest -Uri "http://localhost:3000/api/admin" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"email":"teste@admin.com","password":"teste123","name":"Admin Teste"}'
```

### Exemplo com cURL (Linux/Mac)

```bash
# Login
curl -X POST http://localhost:3000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@api-lp.com","password":"admin123"}'

# Listar admins
curl http://localhost:3000/api/admin

# Criar novo admin
curl -X POST http://localhost:3000/api/admin \
  -H "Content-Type: application/json" \
  -d '{"email":"teste@admin.com","password":"teste123","name":"Admin Teste"}'
```

## 🔄 Fluxo Recomendado

1. **Configuração Inicial**
   ```bash
   yarn install
   yarn db:push
   yarn db:seed
   ```

2. **Desenvolvimento**
   ```bash
   yarn dev
   ```

3. **Primeiro Acesso**
   - Use as credenciais: `admin@api-lp.com` / `admin123`
   - **IMPORTANTE**: Altere a senha em produção

4. **Gerenciamento**
   - Crie outros admins conforme necessário
   - Use o Prisma Studio para visualizar dados: `yarn db:studio`

## ⚠️ Segurança em Produção

1. **Altere a senha padrão** imediatamente
2. **Configure variáveis de ambiente** adequadas
3. **Use HTTPS** em produção
4. **Implemente autenticação JWT** se necessário
5. **Configure backup** do banco de dados
6. **Monitore tentativas de login** inválidas

## 🆘 Solução de Problemas

### Erro: "Admin já existe"
O seeder detectou que já existe um admin. Isso é normal em execuções subsequentes.

### Erro: "Credenciais inválidas"
Verifique se email e senha estão corretos. Lembre-se que a senha padrão é `admin123`.

### Erro: "Email já está em uso"
Cada admin deve ter um email único. Use um email diferente.

### Erro de conexão com banco
Verifique se PostgreSQL está rodando e as credenciais no `.env` estão corretas.
