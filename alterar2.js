// Tentativas 2  - Alterar dados no JSON

const fs = require('fs');
const path = require('path');
const express= require('express');

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const carrosPath = path.join(__dirname, 'carros.json');
const luxosPath = path.join(__dirname, 'carros_luxo.json');
const esportivosPath = path.join(__dirname, 'carros_esportivos.json');
const classicosPath = path.join(__dirname, 'carros_classicos.json');

function SalvarCarro(carros){
    fs.writeFileSync(carrosPath, JSON.stringify(carros, null, 2));
}

function SalvarLuxo(luxos){
    fs.writeFileSync(luxosPath, JSON.stringify(luxos, null, 2));
}

function SalvarEsportivos(esportivos){
    fs.writeFileSync(esportivosPath, JSON.stringify(esportivos, null , 2));
}

function SalvarClassico(classicos){
    fs.writeFileSync(classicosPath, JSON.stringify(classicos, null, 2));
}

app.get('/carros/atualizar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'novocarro.html'));
});

app.get('/carros-luxo/atualizar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'novocarroluxo.html'));
});

app.get('/carros-esportivo/atualizar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'novocarroesportivo.html'));
});

app.get('/carros-classico/atualizar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'novocarroclassico.html'));
});

app.post('/carros/atualizar-carro', (req, res) => {
    const { nome, desc, url_info} = req.body;

    let carrosData = fs.readFileSync(carrosPath, 'utf-8');
    let carros = JSON.parse(carrosData);

    const carrosIndex = carros.findIndex(carro => carro.nome.toLowerCase() === nome.toLowerCase());

    if(carrosIndex === -1){
        res.send(`<h1>Carro não encontrado, tente novamente.</h1>`);
        return;
    }
    else{
        carros[carrosIndex].nome = nome;
        carros[carrosIndex].desc = desc;
        carros[carrosIndex].url_info = url_info;

        SalvarCarro(carros);

        res.send(`<h1>Dados do carro atualizados com sucesso!</h1>`);
    }
});

app.post('/carros-luxo/atualizar-carro', (req, res) => {
    const { nome, desc, url_info } = req.body;

    let luxosData = fs.readFileSync(luxosPath, 'utf-8');
    let luxos = JSON.parse(luxosData);

    const luxosIndex = luxos.findIndex(carro => carro.nome.toLowerCase() === nome.toLowerCase());

    if(luxosIndex === -1){
        res.send(`<h1>Carro de luxo não encontrado, tente novamente.</h1>`);
        return;
    }
    else{
        luxos[luxosIndex].nome = nome;
        luxos[luxosIndex].desc = desc;
        luxos[luxosIndex].url_info = url_info;

        SalvarLuxo(luxos);

        res.send(`<h1>Dados do carro de luxo atualizados com sucesso!</h1>`);
    }
});

app.post('/carros-esportivo/atualizar-carro', (req, res) => {
    const { nome, desc, url_info } = req.body;

    let esportivosData = fs.readFileSync(esportivosPath, 'utf-8');
    let esportivos = JSON.parse(esportivosData);

    const esportivosIndex = esportivos.findIndex(carro => carro.nome.toLowerCase() === nome.toLowerCase());

    if(esportivosIndex === -1){
        res.send(`<h1>Carro esportivo não encontrado, tente novamente.</h1>`);
        return;
    }
    else{
        esportivos[esportivosIndex].nome = nome;
        esportivos[esportivosIndex].desc = desc;
        esportivos[esportivosIndex].url_info = url_info;

        SalvarEsportivos(esportivos);

        res.send(`<h1>Dados do carro esportivo atualizados com sucesso!</h1>`);
    }
});

app.post('/carros-classico/atualizar-carro', (req, res) => {
    const { nome, desc, url_info } = req.body;

    let classicosData = fs.readFileSync(classicosPath, 'utf-8');
    let classicos = JSON.parse(classicosData);

    const classicosIndex = classicos.findIndex(carro => carro.nome.toLowerCase() === nome.toLowerCase());

    if(classicosIndex === -1){
        res.send(`<h1>Carro clássico não encontrado, tente novamente.</h1>`);
        return;
    }
    else{
        classicos[classicosIndex].nome = nome;
        classicos[classicosIndex].desc = desc;
        classicos[classicosIndex].url_info = url_info;

        SalvarClassico(classicos);

        res.send(`<h1>Dados do carro clássico atualzados com sucesso!</h1>`);
    }
});

app.listen(port, () => {
    console.log(`Server now loading in: http://localhost:${port}/carros/atualizar-carro`);
});