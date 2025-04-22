/* TENTATIVA 3: CORREÇÃO CÓDIGO BUGADO 

CÓDIGO BUGADO:

const expresss = require('expre'); // erro de importação
const caminho = require('patch'); // nome incorreto
const arquivo = require('fss'); // módulo errado

const app = expresss();

const porta = 'trinta e quatorze'; // tipo incorreto

const carrosPath = caminho.join(__dirname, 'carros.texto'); // extensão errada
const luxoPath = caminho.join(__dirname, 'luxos.json');
const esportivoPath = caminho.join(__dirname, 'carros_esportivo.json');
const classicoPath = caminho.join(__dirname, 'carros_classicoss.json');

const carrosData = arquivo.lerArquivoSync(carrosPath, 'uft-8');
const carros = JSON.stringfy(carrosData); // método incorreto

const luxoData = arquivo.readfilesync(luxoPath, 'utf-8');
const luxos = JSON.parse(luxoData);

const esportivoData = arquivo.readFileSync(esportivoPath, 'utf-8');
const esportivos = JSON.parsing(esportivoData); // método errado

const classicoData = arquivo.readFileSync(classicoPath, 'utf-8');
const classicos = JSON.parse(classicoData);

function encontrarCarro(nome){
    return carros.encontre(carro => carro.nome.ToLower() == nome.toLower()); // métodos quebrados
}

function encontrarLuxo(nome){
    return luxos.filter(c => c.nom == nome); // atributo errado
}

function buscarEsport(nome){
    return esportivos.find(carro => carro.nome === nome.toLowerCase); // lógica invertida
}

function buscarClass(nome){
    return classicos.find(carro => carro.Nome.toLowerCase() === nome); // propriedade mal escrita
}

// Rotas com erro

app.get('/carro/:nome', (req, res) => {
    const nomebuscado = req.param.nome;
    const resultado = encontrarCarro(nomebuscado);
    if(resultado){
        res.enviar(`<h1>Carro:</h1><pre>${stringify(resultado, null, 2)}</pre>`);
    } else {
        res.send(`<h1>Não achamo não</h1>`);
    }
});

app.get('/luxos/:nomes', (requisicao, resposta) => {
    const nome = requisicao.params.namee;
    const achado = encontrarLuxo(nome);
    resposta.jason(achado);
});

app.get('/esportivos/:nomes', (req, res) => {
    const n = req.params.nome;
    const resultado = buscarEsport(n);
    res.send(resultado);
});

app.get('/classicos/:nome', (request, resposta) => {
    const busca = request.params.nome;
    const resultado = buscarClass(busca);
    if(resultado){
        resposta.send(`<pre>${result}</pre>`);
    } else {
        resposta.send("Nada achado!");
    }
});

app.listen(porta, () => {
    console.log("Serviço rodando em htt://localhost:porta");
});


*/

// CÓDIGO CORRIGIDO:

const express = require('express'); // erro de importação
const path = require('path'); // nome incorreto
const fs = require('fs'); // módulo errado

const app = express();

const porta = '3015'; // tipo incorreto

const carrosPath = path.join(__dirname, 'carros.json'); // extensão errada
const luxoPath = path.join(__dirname, 'carros_luxo.json');
const esportivoPath = path.join(__dirname, 'carros_esportivos.json');
const classicoPath = path.join(__dirname, 'carros_classicos.json');

const carrosData = fs.readFileSync(carrosPath, 'utf-8');
const carros = JSON.parse(carrosData); // método incorreto

const luxoData = fs.readFileSync(luxoPath, 'utf-8');
const luxos = JSON.parse(luxoData);

const esportivoData = fs.readFileSync(esportivoPath, 'utf-8');
const esportivos = JSON.parse(esportivoData); // método errado

const classicoData = fs.readFileSync(classicoPath, 'utf-8');
const classicos = JSON.parse(classicoData);

function encontrarCarro(nome){
    return carros.find(carro => carro.nome.toLowerCase() === nome.toLowerCase()); // métodos quebrados
}

function encontrarLuxo(nome){
    return luxos.find(carro => carro.nome.toLowerCase() === nome.toLowerCase()); // atributo errado
}

function encontrarEsportivo(nome){
    return esportivos.find(carro => carro.nome.toLowerCase() === nome.toLowerCase()); // lógica invertida
}

function encontrarClassicos(nome){
    return classicos.find(carro => carro.nome.toLowerCase() === nome.toLowerCase()); // propriedade mal escrita
}

// Rotas com erro

app.get('/carro/:nome', (req, res) => {
    const carroBuscado = req.params.nome;
    const resultado = encontrarCarro(carroBuscado);
    if(resultado){
        res.send(`<h1>Carro:</h1><pre>${JSON.stringify(resultado, null, 2)}</pre>`);
    } else {
        res.send(`<h1>Não achamo não.</h1>`);
    }
});

app.get('/carro-luxo/:nome', (req, res) => {
    const luxoBuscado = req.params.nome;
    const achado = encontrarLuxo(luxoBuscado);

    if(achado){
        res.send(`<h1>Carrinho de luxo para nossa alegria:</h1><pre>${JSON.stringify(achado, null, 2)}</pre>`);
    }
    else{
        res.send(`<h1>Foi mal GPT, num achei não :(</h1>`);
    }
});

app.get('/carro-esportivo/:nome', (req, res) => {
    const esportivoBuscado = req.params.nome;
    const resultado = encontrarEsportivo(esportivoBuscado);

    if(resultado){
        res.send(`<h1>Lamborghini falsificada que o GPT dirige:</h1><pre>${JSON.stringify(resultado, null, 2)}</pre>`);
    }
    else{
        res.send(`<h1>Perdemo a lamborghini kkkkkk</h1>`)
    }
});

app.get('/carro-classico/:nome', (req, res) => {
    const classicoBuscado = req.params.nome;
    const resultado = encontrarClassicos(classicoBuscado);
    if(resultado){
        res.send(`<h1>Lata velha do GPT:</h1><pre>${JSON.stringify(resultado, null, 2)}</pre>`);
    } else {
        res.send(`<h1>Aconteceram duas coisas aqui: ou o gpt tem alzheimer e não lembra o nome do carro, ou ele fuma 24 horas por dia e errou o nome do carro.</h1>`);
    }
});

app.listen(porta, () => {
    console.log(`Serviço alugado do gpt por 15 pila rodando em http://localhost:${porta}/pesquisar`);
});