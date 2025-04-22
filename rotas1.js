// Tentativa 1, rotas

const http = require('http');

const port = 3003;

const myServer = http.createServer((req, res) => {
    if(req.url === '/teste'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Página teste');
    }
    else if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text-plain'});
        res.end('Página inicial')
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página não encontrada');
    }
});

myServer.listen(port, () => {
    console.log(`Server now loading in: http://localhost:${port}/home`);
});