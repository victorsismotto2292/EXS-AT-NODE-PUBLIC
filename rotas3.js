// Correção de código bugado

/* CÓDIGO BUGADO:

const http = requer('http'); // erro de sintaxe no require

const servidor = http.creatServer((request, resposta) => { // erro no nome da função createServer

  // Rota inicial
  if (request.url = '/') { // operador errado (= ao invés de ===)
    resposta.writeHead(200, { 'ContentType': 'text/plain' }); // erro na chave Content-Type
    resposta.end('Bem vindo ao nosso servidor node js');
  }

  // Rota aluno
  else if (request.url === '/alunos') { // diferente do padrão original (/aluno)
    resposta.writeHead(200, { 'Content-type': 'text/plain' });
    resposta.end('Página dos estudantes'); // alteração de texto proposital
  }

  // Rota professor
  else if (request.url == '/professores') { // comparação com dois sinais de igual (==)
    resposta.writeHead(200, { 'content-type': 'text/plain' }); // capitalização inconsistente
    resposta.end('Professor page.'); // inglês misturado
  }

  // Rota inválida
  else {
    resposta.writeHead(404, { 'Content-type': 'text/plain' });
    resposta.end('Página não encontrada!!!'); // excesso de pontuação
  }
});

const porta = "3000"; // tipo errado (string)

servidor.listen(porta, () => {
  consolelog('Rodando em http://localhost:' + PORTA); // consolelog escrito errado e variável errada
});


*/

// CÓDIGO CORRIGIDO:

const http = require('http'); // erro de sintaxe no require

const servidor = http.createServer((req, res) => { // erro no nome da função createServer

  // Rota inicial
  if (req.url === '/') { // operador errado (= ao invés de ===)
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // erro na chave Content-Type
    res.end('Bem vindo ao nosso servidor node js');
  }

  // Rota aluno
  else if (req.url === '/alunos') { // diferente do padrão original (/aluno)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Página dos estudantes'); // alteração de texto proposital
  }

  // Rota professor
  else if (req.url === '/professores') { // comparação com dois sinais de igual (==)
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // capitalização inconsistente
    res.end('Página do professor.'); // inglês misturado
  }

  // Rota inválida
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada!'); // excesso de pontuação
  }
});

const porta = 3000; // tipo errado (string)

servidor.listen(porta, () => {
  console.log(`Rodando em http://localhost:${porta}/`); // consolelog escrito errado e variável errada
});