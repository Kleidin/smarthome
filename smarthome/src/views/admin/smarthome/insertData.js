import setupDatabase from './db.ts';

async function insertData() {
  const db = await setupDatabase();

  const userData = [
    { nome: 'João', sobrenome: 'Silva', email: 'joao@example.com', senha: '123456' },
    { nome: 'Maria', sobrenome: 'Santos', email: 'maria@example.com', senha: 'abcdef' }
  ];

  for (const user of userData) {
    await db.run(
      'INSERT INTO users (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)',
      [user.nome, user.sobrenome, user.email, user.senha]
    );
  }

  console.log('Dados inseridos com sucesso!');
}

insertData().catch(console.error);
