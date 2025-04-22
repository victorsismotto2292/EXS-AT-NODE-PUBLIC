// Tentativa 2 - Node js

const http = require('http');

const port = 3004;

const myServer = http.createServer((req, res) => {
    if(req.url === '/bgz'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OI BGZ!!!');
    }
    else if(req.url === '/urano'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OI URANO!!!');
    }
    else if(req.url === '/hgb'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OI HGB!!!');
    }
    else if(req.url === '/toad'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OI TOAD!!!');
    }
    else if(req.url === '/multilenga'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OI MULTILENGA!!!');
    }
    else if(req.url === '/vinny'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OI VINNY!!!');
    }
    else if(req.url === '/foguito'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OI FOGUITO!!!');
    }
    else if(req.url === '/topzera'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OI TOPZERA!!!');
    }
    else if(req.url === '/esponja'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OI ESPONJA!!!');
    }
    else if(req.url === '/vasco'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OI VASCO!!!');
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página não encontrada');
    }
});

myServer.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}/vinny`);
})