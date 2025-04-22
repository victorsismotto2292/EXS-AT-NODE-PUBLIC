// Tentativa 1 - FILTRO NO JSON

const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const port = 3011;

const carrosPath = path.join(__dirname, 'carros.json');
const luxoPath = path.join(__dirname, 'carros_luxo.json');
const esportivosPath = path.join(__dirname, 'carros_esportivos.json');
const classicosPath = path.join(__dirname, 'carros_classicos.json');

const carrosData = fs.readFileSync(carrosPath, 'utf-8');
const carros = JSON.parse(carrosData);

const luxoData = fs.readFileSync(luxoPath, 'utf-8');
const luxo = JSON.parse(luxoData);

const esportivosData = fs.readFileSync(esportivosPath, 'utf-8');
const esportivos = JSON.parse(esportivosData);

const classicosData = fs.readFileSync(classicosPath, 'utf-8');
const classicos = JSON.parse(classicosData);

function CarrosporNome(nome){
    return carros.find(carro => carro.nome.toLowerCase() === nome.toLowerCase());
}

function LuxosporNome(nome){
    return luxo.find(carro => carro.nome.toLowerCase() === nome.toLowerCase());
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
        res.send(`<h1>Carro não encontrado</h1>`);
    }
});

app.get('/carros-luxo/:nome', (req, res) => {
    const luxoBuscado = req.params.nome;
    const luxoEncontrado = LuxosporNome(luxoBuscado);

    if(luxoEncontrado){
        res.send(`<h1>Carro encontrado</h1><pre>${JSON.stringify(luxoEncontrado, null, 2)}</pre>`);
    }
    else{
        res.send(`<h1>Carro não encontrado</h1>`);
    }
});

app.get('/carros-esportivos/:nome', (req, res) => {
    const esportivosBuscado = req.params.nome;
    const esportivosEncontrado = EsportivosporNome(esportivosBuscado);

    if(esportivosEncontrado){
        res.send(`<h1>Carro encontrado:</h1><pre>${JSON.stringify(esportivosEncontrado, null , 2)}</pre>`)
    }
    else{
        res.send(`<h1>Carro não encontrado</h1>`);
    }
});

app.get('/carros-classicos/:nome', (req, res) => {
    const classicosBuscado = req.params.nome;
    const classicosEncontrado = Classicospornome(classicosBuscado);

    if(classicosEncontrado){
        res.send(`<h1>Carro encontrado:</h1><pre>${JSON.stringify(classicosEncontrado, null , 2)}</pre>`);
    }
    else{
        res.send(`<h1>Carro não encontrado</h1>`);
    }
});

app.listen(port, () => {
    console.log(`Server now loading in: http://localhost:${port}`);
});