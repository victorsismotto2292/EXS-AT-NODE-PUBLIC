// Tentativa 3 - API + FILTRO NO JSON

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const port = 3014;

const carrosPath = path.join(__dirname, 'carros.json');
const luxosPath = path.join(__dirname, 'carros_luxo.json');
const esportivosPath = path.join(__dirname, 'carros_esportivos.json');
const classicosPath = path.join(__dirname, 'carros_classicos.json');

const carrosData = fs.readFileSync(carrosPath, 'utf-8');
const carros = JSON.parse(carrosData);

const luxosData = fs.readFileSync(luxosPath, 'utf-8');
const luxos = JSON.parse(luxosData);

const esportivosData = fs.readFileSync(esportivosPath, 'utf-8');
const esportivos = JSON.parse(esportivosData);

const classicosData = fs.readFileSync(classicosPath, 'utf-8');
const classicos = JSON.parse(classicosData);

function CarrosporNome(nome){
    return carros.find(carro => carro.nome.toLowerCase() === nome.toLowerCase());
}

function LuxosporNome(nome){
    return luxos.find(carro => carro.nome.toLowerCase() === nome.toLowerCase());
}

function EsportivosporNome(nome){
    return esportivos.find(carro => carro.nome.toLowerCase() === nome.toLowerCase());
}

function Classicospornome(nome){
    return classicos.find(carro => carro.nome.toLowerCase() === nome.toLowerCase());
}

app.get('/carros/:nome', (req, res) => {
    const carroBuscado = req.params.nome;
    const carroEncontrado = CarrosporNome(carroBuscado);

    if(carroEncontrado){
        res.send(`<h1>Carro encontrado:</h1><pre>${JSON.stringify(carroEncontrado, null, 2)}</pre>`);
    }
    else{
        res.send(`<h1>Carro não encontrado.</h1>`);
    }
});

app.get('/carros-luxo/:nome', (req, res) => {
    const luxoBuscado = req.params.nome;
    const luxoEncontrado = LuxosporNome(luxoBuscado);

    if(luxoEncontrado){
        res.send(`<h1>Carro de luxo encontrado:</h1><pre>${JSON.stringify(luxoEncontrado, null, 2)}</pre>`);
    }
    else{
        res.send(`<h1>Carro de luxo não encontrado.</h1>`);
    }
});

app.get('/carros-esportivo/:nome', (req, res) => {
    const esportivoBuscado = req.params.nome;
    const esportivoEncontrado = EsportivosporNome(esportivoBuscado);

    if(esportivoEncontrado){
        res.send(`<h1>Carro esportivo encontrado:</h1><pre>${JSON.stringify(esportivoEncontrado, null, 2)}</pre>`);
    }
    else{
        res.send(`<h1>Carro esportivo não encontrado.</h1>`)
    }
});

app.get('/carros-classicos/:nome', (req, res) => {
    const classicoBuscado = req.params.nome;
    const classicoEncontrado = Classicospornome(classicoBuscado);

    if (classicoEncontrado){
        res.send(`<h1>Carro clássico encontrado:</h1><pre>${JSON.stringify(classicoEncontrado, null, 2)}</pre>`);
    }
    else{
        res.send('<h1>Carro clássico não encontrado.</h1>');
    }
});

app.listen(port, () => {
    console.log(`Server now loading in: http://localhost:${port}/carros/pesquisar`);
});