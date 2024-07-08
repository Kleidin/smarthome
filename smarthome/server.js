const http = require('http');

// Função de callback que será executada sempre que uma requisição for recebida
const server = http.createServer((req, res) => {
    // Configuração do cabeçalho da resposta HTTP
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Envio do corpo da resposta
    res.end('');
});

// Configuração para o servidor escutar na porta 3000
server.listen(3000, 'localhost', () => {
    console.log('Servidor Node.js está rodando em http://localhost:3000/');
});
