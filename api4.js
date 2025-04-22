// TENTATIVA 4: API NO JSON

const http = require('http');
const fs = require('fs');
const url = require('url');

function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    });
}

function callback(request, response){
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var parts = url.parse(request.url);
    var path = parts.path;

    if(request.url == '/alunos'){
        readFile(response, 'alunos.json');
    }
    else if (request.url == '/produtos'){
        readFile(response, 'produtos.json');
    }
    else if(request.url == '/livros'){
        readFile(response, 'livros.json');
    }
    else{
        response.end("Path não mapeado" + path);
    }
}

var server = http.createServer(callback)

server.listen(3008);

console.log("Server now loading in: http://localhost:3008");