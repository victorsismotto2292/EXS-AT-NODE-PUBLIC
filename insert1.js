<<<<<<< HEAD
// Tentativa 1, inserir dados no JSON

const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();

const port = 3001;

const carrosPath = path.join(__dirname, 'carros.json');
const luxosPath = path.join(__dirname, 'carros_luxo.json');
const esportivosPath = path.join(__dirname, 'carros_esportivos.json');
const classicosPath = path.join(__dirname, 'carros_classicos.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let carrosData = fs.readFileSync(carrosPath, 'utf-8');
let carros = JSON.parse(carrosData);

let luxosData = fs.readFileSync(luxosPath, 'utf-8');
let luxos = JSON.parse(luxosData);

let esportivosData = fs.readFileSync(esportivosPath, 'utf-8');
let esportivos = JSON.parse(esportivosData);

let classicosData = fs.readFileSync(classicosPath, 'utf-8');
let classicos = JSON.parse(classicosData);

function SalvarDadosCarro(){
    fs.writeFileSync(carrosPath, JSON.stringify(carros, null, 2));
}

function SalvarDadosLuxo(){
    fs.writeFileSync(luxosPath, JSON.stringify(luxos, null, 2));
}

function SalvarDadosEsportivo(){
    fs.writeFileSync(esportivosPath, JSON.stringify(esportivos, null, 2));
}

function SalvarDadosClassico(){
    fs.writeFileSync(classicosPath, JSON.stringify(classicos, null, 2));
}

app.get('/carros/adicionar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'adicionarcarro.html'));
});

app.get('/carros-luxo/adicionar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'adicionarcarroluxo.html'));
});

app.get('/carros-esportivo/adicionar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'adicionarcarroesportivo.html'));
});

app.get('/carros-classico/adicionar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'adicionarcarroclassico.html'));
});

app.post('/carros/adicionar-carro', (req, res) => {
    const novoCarro = req.body;

    if(carros.find(carro => carro.nome.toLowerCase() === novoCarro.nome.toLowerCase())){
        res.send(`<h1>Esse carro já existe, tente novamente.</h1>`);
        return;
    }
    else{
        carros.push(novoCarro);

        SalvarDadosCarro();

        res.send(`<h1>Novo carro adicionado com sucesso!</h1>`);
    }
});

app.post('/carros-luxo/adicionar-carro', (req, res) => {
    const novoCarroLuxo = req.body;

    if(luxos.find(carro => carro.nome.toLowerCase() === novoCarroLuxo.nome.toLowerCase())){
        res.send(`<h1>Esse carro de luxo já existe, tente novamente.</h1>`);
    }
    else{
        luxos.push(novoCarroLuxo);

        SalvarDadosLuxo();

        res.send(`<h1>Novo carro de luxo adicionado com sucesso!</h1>`);
    }
});

app.post('/carros-esportivo/adicionar-carro', (req, res) => {
    const novoCarroEsportivo = req.body;

    if(esportivos.find(carro => carro.nome.toLowerCase() === novoCarroEsportivo.nome.toLowerCase())){
        res.send(`<h1>Esse carro esportivo já existe, tente novamente.</h1>`);
    }
    else{
        esportivos.push(novoCarroEsportivo);

        SalvarDadosEsportivo();

        res.send(`<h1>Novo carro esportivo adicionado com sucesso!</h1>`);
    }
});

app.post('/carros-classico/adicionar-carro', (req, res) => {
    const novoCarroClassico = req.body;

    if(classicos.find(carro => carro.nome.toLowerCase() === novoCarroClassico.nome.toLowerCase())){
        res.send(`<h1>Esse carro clássico já existe, tente novamente.</h1>`);
    }
    else{
        classicos.push(novoCarroClassico);

        SalvarDadosClassico();

        res.send(`<h1>Novo carro clássico adicionado com sucesso!</h1>`);
    }
});

app.listen(port, () => {
    console.log(`Server now loading in: http://localhost:${port}/carros/adicionar-carro`);
=======
// Tentativa 1, inserir dados no JSON

const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();

const port = 3001;

const carrosPath = path.join(__dirname, 'carros.json');
const luxosPath = path.join(__dirname, 'carros_luxo.json');
const esportivosPath = path.join(__dirname, 'carros_esportivos.json');
const classicosPath = path.join(__dirname, 'carros_classicos.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let carrosData = fs.readFileSync(carrosPath, 'utf-8');
let carros = JSON.parse(carrosData);

let luxosData = fs.readFileSync(luxosPath, 'utf-8');
let luxos = JSON.parse(luxosData);

let esportivosData = fs.readFileSync(esportivosPath, 'utf-8');
let esportivos = JSON.parse(esportivosData);

let classicosData = fs.readFileSync(classicosPath, 'utf-8');
let classicos = JSON.parse(classicosData);

function SalvarDadosCarro(){
    fs.writeFileSync(carrosPath, JSON.stringify(carros, null, 2));
}

function SalvarDadosLuxo(){
    fs.writeFileSync(luxosPath, JSON.stringify(luxos, null, 2));
}

function SalvarDadosEsportivo(){
    fs.writeFileSync(esportivosPath, JSON.stringify(esportivos, null, 2));
}

function SalvarDadosClassico(){
    fs.writeFileSync(classicosPath, JSON.stringify(classicos, null, 2));
}

app.get('/carros/adicionar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'adicionarcarro.html'));
});

app.get('/carros-luxo/adicionar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'adicionarcarroluxo.html'));
});

app.get('/carros-esportivo/adicionar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'adicionarcarroesportivo.html'));
});

app.get('/carros-classico/adicionar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'adicionarcarroclassico.html'));
});

app.post('/carros/adicionar-carro', (req, res) => {
    const novoCarro = req.body;

    if(carros.find(carro => carro.nome.toLowerCase() === novoCarro.nome.toLowerCase())){
        res.send(`<h1>Esse carro já existe, tente novamente.</h1>`);
        return;
    }
    else{
        carros.push(novoCarro);

        SalvarDadosCarro();

        res.send(`<h1>Novo carro adicionado com sucesso!</h1>`);
    }
});

app.post('/carros-luxo/adicionar-carro', (req, res) => {
    const novoCarroLuxo = req.body;

    if(luxos.find(carro => carro.nome.toLowerCase() === novoCarroLuxo.nome.toLowerCase())){
        res.send(`<h1>Esse carro de luxo já existe, tente novamente.</h1>`);
    }
    else{
        luxos.push(novoCarroLuxo);

        SalvarDadosLuxo();

        res.send(`<h1>Novo carro de luxo adicionado com sucesso!</h1>`);
    }
});

app.post('/carros-esportivo/adicionar-carro', (req, res) => {
    const novoCarroEsportivo = req.body;

    if(esportivos.find(carro => carro.nome.toLowerCase() === novoCarroEsportivo.nome.toLowerCase())){
        res.send(`<h1>Esse carro esportivo já existe, tente novamente.</h1>`);
    }
    else{
        esportivos.push(novoCarroEsportivo);

        SalvarDadosEsportivo();

        res.send(`<h1>Novo carro esportivo adicionado com sucesso!</h1>`);
    }
});

app.post('/carros-classico/adicionar-carro', (req, res) => {
    const novoCarroClassico = req.body;

    if(classicos.find(carro => carro.nome.toLowerCase() === novoCarroClassico.nome.toLowerCase())){
        res.send(`<h1>Esse carro clássico já existe, tente novamente.</h1>`);
    }
    else{
        classicos.push(novoCarroClassico);

        SalvarDadosClassico();

        res.send(`<h1>Novo carro clássico adicionado com sucesso!</h1>`);
    }
});

app.listen(port, () => {
    console.log(`Server now loading in: http://localhost:${port}/carros/adicionar-carro`);
>>>>>>> 6d33305eea0f1266cbdedfb7fef0e43a1a104d67
});