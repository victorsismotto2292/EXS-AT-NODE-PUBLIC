// Tentativa 3: API no JSON

const http = require('http');
const fs = require('fs');
const url = require('url');

function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data)        
    })
}

function callback (request, response){
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    var parts = url.parse(request.url);

    var path = parts.path;
    
    if(request.url == '/carros-classicos'){
        readFile(response, 'carros_classicos.json')
    }
    else if(request.url == '/carros-esportivos'){
        readFile(response, 'carros_esportivos.json')
    }
    else if(request.url == '/carros-luxo'){
        readFile(response, 'carros_luxo.json')
    }
    else if(request.url == '/carros'){
        readFile(response, 'carros.json')
    }
    else{
        response.end("Path não mapeado" + path);
    }
}

var server = http.createServer(callback);

server.listen(3007);

console.log("Server now loading in: http://localhost:3007");