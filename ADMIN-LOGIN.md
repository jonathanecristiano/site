# 🔐 Sistema de Administração - Credenciais de Acesso

## 📋 Informações Gerais

Este documento contém as credenciais necessárias para acessar o painel administrativo do site Jonatha e Cristiano.

## 🌐 URL de Acesso

**Ambiente de Desenvolvimento:**
```
http://localhost:3001/admin
```

**Ambiente de Produção:**
```
[URL_DO_SITE]/admin
```

## 🔑 Credenciais de Login

### Usuário Administrador

| Campo    | Valor    |
|----------|----------|
| **Usuário** | `jc2025` |
| **Senha**   | `jc2025` |

## 🚀 Como Acessar

1. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

2. **Acesse a URL de administração:**
   - Abra o navegador
   - Digite: `http://localhost:3001/admin`

3. **Faça o login:**
   - Digite o usuário: `jc2025`
   - Digite a senha: `jc2025`
   - Clique em "Entrar"

## 🛠️ Funcionalidades Disponíveis

Após o login bem-sucedido, você terá acesso a:

- ✅ **Formulário de Administração** - Gerenciamento de dados
- ✅ **Tabela de Dados** - Visualização de informações
- ✅ **Painel de Controle** - Administração geral do site

## ⚠️ Observações Importantes

### Segurança
- **IMPORTANTE:** Estas são credenciais temporárias para desenvolvimento
- **ALTERE** as credenciais antes de colocar em produção
- **NÃO COMPARTILHE** estas credenciais publicamente

### Troubleshooting

**Problema:** "Login ou senha incorretos"
- ✅ Verifique se digitou exatamente: `jc2025` (sem espaços)
- ✅ Certifique-se de que não há caracteres especiais
- ✅ Verifique se o Caps Lock está desligado

**Problema:** Página não carrega
- ✅ Verifique se o servidor está rodando (`npm run dev`)
- ✅ Confirme se está acessando a porta correta (3001)
- ✅ Verifique se não há erros no console do navegador

## 🔧 Para Desenvolvedores

### Localização do Código
O sistema de login está implementado em:
```
src/app/admin/page.tsx
```

### Alterar Credenciais
Para alterar as credenciais, edite a linha 30 do arquivo:
```tsx
if (data.login === "NOVO_USUARIO" && data.senha === "NOVA_SENHA") {
```

### Debug
O sistema possui logs de debug no console do navegador. Para visualizar:
1. Abra o DevTools (F12)
2. Vá para a aba "Console"
3. Tente fazer login para ver os dados enviados

## 📞 Suporte

Em caso de problemas com o acesso administrativo, entre em contato com a equipe de desenvolvimento.

---

**Última atualização:** 04 de Agosto de 2025
**Versão:** 1.0
