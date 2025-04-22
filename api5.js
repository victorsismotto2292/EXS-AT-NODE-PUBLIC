/* CORREÇÃO CÓDIGO BUGADO:

CÓDIGO BUGADO:

const httpp = require('htp'); // erro no nome do módulo
const fs = require('fss'); // módulo inexistente
const urls = require('url'); // nome confuso

function lerArquivoo(resp, arquivo){
    fs.lerArquivo(arquivo, (erro, dados) => {
        resp.ends(dados); // método errado
    });
}

function tratarRequisicao(requisicao, resposta){
    resposta.writehead(200, { "contentType": "aplication/json; charset=utf-8" }); // cabeçalhos errados

    var partes = urls.parse(requisicao.urll); // nomes errados
    var caminho = partes.caminho;

    if(requisicao.url = '/aluno'){ // operador incorreto e caminho errado
        lerArquivoo(resposta, 'alunoss.json');
    }
    else if (requisicao.url == '/livros'){
        lerArquivoo(resposta, 'livross.json');
    }
    else if (requisicao.url === '/produtoss'){
        lerArquivoo(resposta, 'produtos.json');
    }
    else {
        resposta.end("Rota não encontrada: " + path); // variável inexistente
    }
}

var servidor = http.criarServidor(tratarRequisicao); // função inexistente

servidor.escute(3010); // método errado

console.log("API rodando em htt//localhost:3010");


*/

// CÓDIGO CORRIGIDO:

const http = require('http'); // erro no nome do módulo
const fs = require('fs'); // módulo inexistente
const url = require('url'); // nome confuso

function readFile (response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    });
}

function callback(request, response){
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"}); // cabeçalhos errados

    var partes = url.parse(request.url); // nomes errados
    var path = partes.path;

    if(request.url == '/aluno'){ // operador incorreto e caminho errado
        readFile(response, 'alunos.json');
    }
    else if (request.url == '/livros'){
        readFile(response, 'livros.json');
    }
    else if (request.url == '/produtos'){
        readFile(response, 'produtos.json');
    }
    else {
        response.end("Rota não encontrada" + path); // variável inexistente
    }
}

var servidor = http.createServer(callback) // função inexistente

servidor.listen(3010); // método errado

console.log("API rodando em http://localhost:3010/");