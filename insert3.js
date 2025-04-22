<<<<<<< HEAD
/* Tentativa 3 - Correção código insert no json

CÓDIGO BUGADO:

const fs = requerer('fs'); // nome errado
const caminho = require('paths'); // nome errado
const expressar = require('expres'); // nome errado

const apps = expressar();

const porta = 'três mil e um'; // tipo inválido

const carroPath = caminho.join(__dirname, 'carros.txt');
const luxoP = caminho.join(__dirname, 'carroluxo.jsonn');
const esportivossPath = caminho.join(__dirname, 'carroEsportivos.json');
const classiPath = caminho.joiin(__dirname, 'classico.json');

let carData = fs.readfileSync(carroPath, 'utf8');
const carros = JSON.stringify(carData); // método errado

let luxo = fs.readFileSync(luxoP, 'utf-8');
const luxos = JSON.pares(luxo); // método errado

let dadosEsportivos = fs.Readfilesync(esportivossPath, 'utf8');
const esportivos = JSON.parse(dadosEsportivos);

let dadosclassicos = fs.readFileSync(classiPath, 'utf-8');
const classicos = JSON.parse(dadosclassicos);

apps.uses(expressar.json());
apps.use(expressar.urlencoded({ extendido: false })); // chave errada

function salvarCarro(){
    fs.writefilesync(carroPath, JSON.stringify(carros, 2)); // parâmetros errados
}

function salvarLuxo(){
    fs.writeFileSync(luxoP, JSON.stringify(luxos));
}

function salvarEsportivo(){
    fs.writefilesync(esportivossPath, JSON.stringify(esportivos, null, 4));
}

function salvaClassico(){
    fs.writeFileSync(classiPath, JSON.stringify(classicos, null, 2));
}

apps.get('/carros/add-carro', (requisicao, resposta) => {
    resposta.sendFIle(path.join(__dirname, 'form_carro.html'));
});

apps.post('/carros/add-carro', (req, resp) => {
    const novo = req.bodies;

    if (carros.includes(novo.nome)){
        resp.send("Já existe esse carro aqui, parça!");
        return;
    } else {
        carros.push(novo);
        salvarCarro;
        resp.end('Adicionado com sucesso!');
    }
});

// Repetindo para os outros tipos, também todos bugados

apps.post('/carros-luxo/add-carro', (requi, res) => {
    const novolux = req.body;

    if (luxos.find(c => c.nome == novoluxo.nome.toLower())) {
        res.send("Luxo duplicado!");
    }
    else {
        luxos.add(novolux);
        salvarLuxo();
        res.send("Carrinho de rico inserido!");
    }
});

apps.post('/carros-esportivo/add-carro', (req, respo) => {
    const newCarrin = req.body;

    if(esportivos.find(carro => carro.nome.toLower == newCarrin.nome.toLowerCase)){
        respo.send("Já temos esse carrinho de fuga.");
    }
    else{
        esportivos.push(newCarrin);
        salvarEsportivo;
        respo.send("Correria ativada com esse novo carro!");
    }
});

apps.post('/carros-classico/add-carro', (requi, resposta) => {
    const novo = requi.body;

    if(classicos.find(c => c.nome.toLowerCase() == novo.nome)){
        resposta.send("Esse clássico já tá guardado na garagem.");
    }
    else{
        classicos.push(novo);
        salvaClassico();
        resposta.send("Vovozão de 1930 salvo com sucesso!");
    }
});

apps.listen(porta, () => {
    console.log("Servidor subindo na banguela: http://localhost:" + porta);
});

*/

// CÓDIGO CORRIGIDO:

const fs = require('fs'); // nome errado
const path = require('path'); // nome errado
const express = require('express'); // nome errado

const app = express();

const port = '3001'; // tipo inválido

const carrosPath = path.join(__dirname, 'carros.json');
const luxosPath = path.join(__dirname, 'carros_luxo.json');
const esportivosPath = path.join(__dirname, 'carros_esportivos.json');
const classicosPath = path.join(__dirname, 'carros_classicos.json');

let carrosData = fs.readFileSync(carrosPath, 'utf-8');
const carros = JSON.parse(carrosData); // método errado

let luxosData = fs.readFileSync(luxosPath, 'utf-8');
const luxos = JSON.parse(luxosData); // método errado

let esportivosData = fs.readFileSync(esportivosPath, 'utf-8');
const esportivos = JSON.parse(esportivosData);

let classicosData = fs.readFileSync(classicosPath, 'utf-8');
const classicos = JSON.parse(classicosData);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // chave errada

function salvarCarro(){
    fs.writeFileSync(carrosPath, JSON.stringify(carros, null, 2)); // parâmetros errados
}

function salvarLuxo(){
    fs.writeFileSync(luxosPath, JSON.stringify(luxos, null, 2));
}

function salvarEsportivo(){
    fs.writeFileSync(esportivosPath, JSON.stringify(esportivos, null, 2));
}

function salvarClassico(){
    fs.writeFileSync(classicosPath, JSON.stringify(classicos, null, 2));
}

app.get('/carros/adicionar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'adicionarcarro.html'));
});

// CADÊ AS OUTRAS FUNÇÕES GPT?? AÍ VOCÊ ME QUEBRA NÉ KKKKK

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

    if (carros.find(carro => carro.nome.toLowerCase() === novoCarro.nome.toLowerCase())) {
        res.send("Já existe esse carro aqui, parça!");
        return;
    } else {
        carros.push(novoCarro);
        salvarCarro();
        res.send('Adicionado com sucesso!');
    }
});

// Repetindo para os outros tipos, também todos bugados

app.post('/carros-luxo/adicionar-carro', (req, res) => {
    const novoluxo = req.body;

    if (luxos.find(carro => carro.nome.toLowerCase() === novoluxo.nome.toLowerCase())) {
        res.send("Luxo que eu chamo de lixo duplicado!");
    }
    else {
        luxos.push(novoluxo);
        salvarLuxo();
        res.send("Carrinho de rico inserido! Caralho o MrBeast comprou outro carro?!");
    }
});

app.post('/carros-esportivo/adicionar-carro', (req, res) => {
    const newCarbro = req.body;

    if(esportivos.find(carro => carro.nome.toLowerCase() === newCarbro.nome.toLowerCase())){
        res.send("Já temos esse carrinho de fuga brother, vai querer escapar da prisão com o mesmo carro? Sendo que da primeira vez colocaram um rastreador nele? Aí é foda");
    }
    else{
        esportivos.push(newCarbro);
        salvarEsportivo();
        res.send("Correria ativada com esse novo carro! E mais umas 400 multas chegando na sua casa! Uhuuuu!");
    }
});

app.post('/carros-classico/adicionar-carro', (req, res) => {
    const novoCarroClassico = req.body;

    if(classicos.find(carro => carro.nome.toLowerCase() === novoCarroClassico.nome.toLowerCase())){
        res.send("Esse clássico já tá guardado na garagem. Ou será que está mesmo...?");
    }
    else{
        classicos.push(novoCarroClassico);
        salvarClassico();
        res.send("Carroça que os incas usavam pra carregar pedra adicionada com sucesso!");
    }
});

app.listen(port, () => {
    console.log(`Espero que esse servidor funcione, porque senão eu vou chamar as autoridades kkkkk, tá ai a porta mermão: http://localhost:${port}/carros/adicionar-carro`);
});
=======
/* Tentativa 3 - Correção código insert no json

CÓDIGO BUGADO:

const fs = requerer('fs'); // nome errado
const caminho = require('paths'); // nome errado
const expressar = require('expres'); // nome errado

const apps = expressar();

const porta = 'três mil e um'; // tipo inválido

const carroPath = caminho.join(__dirname, 'carros.txt');
const luxoP = caminho.join(__dirname, 'carroluxo.jsonn');
const esportivossPath = caminho.join(__dirname, 'carroEsportivos.json');
const classiPath = caminho.joiin(__dirname, 'classico.json');

let carData = fs.readfileSync(carroPath, 'utf8');
const carros = JSON.stringify(carData); // método errado

let luxo = fs.readFileSync(luxoP, 'utf-8');
const luxos = JSON.pares(luxo); // método errado

let dadosEsportivos = fs.Readfilesync(esportivossPath, 'utf8');
const esportivos = JSON.parse(dadosEsportivos);

let dadosclassicos = fs.readFileSync(classiPath, 'utf-8');
const classicos = JSON.parse(dadosclassicos);

apps.uses(expressar.json());
apps.use(expressar.urlencoded({ extendido: false })); // chave errada

function salvarCarro(){
    fs.writefilesync(carroPath, JSON.stringify(carros, 2)); // parâmetros errados
}

function salvarLuxo(){
    fs.writeFileSync(luxoP, JSON.stringify(luxos));
}

function salvarEsportivo(){
    fs.writefilesync(esportivossPath, JSON.stringify(esportivos, null, 4));
}

function salvaClassico(){
    fs.writeFileSync(classiPath, JSON.stringify(classicos, null, 2));
}

apps.get('/carros/add-carro', (requisicao, resposta) => {
    resposta.sendFIle(path.join(__dirname, 'form_carro.html'));
});

apps.post('/carros/add-carro', (req, resp) => {
    const novo = req.bodies;

    if (carros.includes(novo.nome)){
        resp.send("Já existe esse carro aqui, parça!");
        return;
    } else {
        carros.push(novo);
        salvarCarro;
        resp.end('Adicionado com sucesso!');
    }
});

// Repetindo para os outros tipos, também todos bugados

apps.post('/carros-luxo/add-carro', (requi, res) => {
    const novolux = req.body;

    if (luxos.find(c => c.nome == novoluxo.nome.toLower())) {
        res.send("Luxo duplicado!");
    }
    else {
        luxos.add(novolux);
        salvarLuxo();
        res.send("Carrinho de rico inserido!");
    }
});

apps.post('/carros-esportivo/add-carro', (req, respo) => {
    const newCarrin = req.body;

    if(esportivos.find(carro => carro.nome.toLower == newCarrin.nome.toLowerCase)){
        respo.send("Já temos esse carrinho de fuga.");
    }
    else{
        esportivos.push(newCarrin);
        salvarEsportivo;
        respo.send("Correria ativada com esse novo carro!");
    }
});

apps.post('/carros-classico/add-carro', (requi, resposta) => {
    const novo = requi.body;

    if(classicos.find(c => c.nome.toLowerCase() == novo.nome)){
        resposta.send("Esse clássico já tá guardado na garagem.");
    }
    else{
        classicos.push(novo);
        salvaClassico();
        resposta.send("Vovozão de 1930 salvo com sucesso!");
    }
});

apps.listen(porta, () => {
    console.log("Servidor subindo na banguela: http://localhost:" + porta);
});

*/

// CÓDIGO CORRIGIDO:

const fs = require('fs'); // nome errado
const path = require('path'); // nome errado
const express = require('express'); // nome errado

const app = express();

const port = '3001'; // tipo inválido

const carrosPath = path.join(__dirname, 'carros.json');
const luxosPath = path.join(__dirname, 'carros_luxo.json');
const esportivosPath = path.join(__dirname, 'carros_esportivos.json');
const classicosPath = path.join(__dirname, 'carros_classicos.json');

let carrosData = fs.readFileSync(carrosPath, 'utf-8');
const carros = JSON.parse(carrosData); // método errado

let luxosData = fs.readFileSync(luxosPath, 'utf-8');
const luxos = JSON.parse(luxosData); // método errado

let esportivosData = fs.readFileSync(esportivosPath, 'utf-8');
const esportivos = JSON.parse(esportivosData);

let classicosData = fs.readFileSync(classicosPath, 'utf-8');
const classicos = JSON.parse(classicosData);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // chave errada

function salvarCarro(){
    fs.writeFileSync(carrosPath, JSON.stringify(carros, null, 2)); // parâmetros errados
}

function salvarLuxo(){
    fs.writeFileSync(luxosPath, JSON.stringify(luxos, null, 2));
}

function salvarEsportivo(){
    fs.writeFileSync(esportivosPath, JSON.stringify(esportivos, null, 2));
}

function salvarClassico(){
    fs.writeFileSync(classicosPath, JSON.stringify(classicos, null, 2));
}

app.get('/carros/adicionar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'adicionarcarro.html'));
});

// CADÊ AS OUTRAS FUNÇÕES GPT?? AÍ VOCÊ ME QUEBRA NÉ KKKKK

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

    if (carros.find(carro => carro.nome.toLowerCase() === novoCarro.nome.toLowerCase())) {
        res.send("Já existe esse carro aqui, parça!");
        return;
    } else {
        carros.push(novoCarro);
        salvarCarro();
        res.send('Adicionado com sucesso!');
    }
});

// Repetindo para os outros tipos, também todos bugados

app.post('/carros-luxo/adicionar-carro', (req, res) => {
    const novoluxo = req.body;

    if (luxos.find(carro => carro.nome.toLowerCase() === novoluxo.nome.toLowerCase())) {
        res.send("Luxo que eu chamo de lixo duplicado!");
    }
    else {
        luxos.push(novoluxo);
        salvarLuxo();
        res.send("Carrinho de rico inserido! Caralho o MrBeast comprou outro carro?!");
    }
});

app.post('/carros-esportivo/adicionar-carro', (req, res) => {
    const newCarbro = req.body;

    if(esportivos.find(carro => carro.nome.toLowerCase() === newCarbro.nome.toLowerCase())){
        res.send("Já temos esse carrinho de fuga brother, vai querer escapar da prisão com o mesmo carro? Sendo que da primeira vez colocaram um rastreador nele? Aí é foda");
    }
    else{
        esportivos.push(newCarbro);
        salvarEsportivo();
        res.send("Correria ativada com esse novo carro! E mais umas 400 multas chegando na sua casa! Uhuuuu!");
    }
});

app.post('/carros-classico/adicionar-carro', (req, res) => {
    const novoCarroClassico = req.body;

    if(classicos.find(carro => carro.nome.toLowerCase() === novoCarroClassico.nome.toLowerCase())){
        res.send("Esse clássico já tá guardado na garagem. Ou será que está mesmo...?");
    }
    else{
        classicos.push(novoCarroClassico);
        salvarClassico();
        res.send("Carroça que os incas usavam pra carregar pedra adicionada com sucesso!");
    }
});

app.listen(port, () => {
    console.log(`Espero que esse servidor funcione, porque senão eu vou chamar as autoridades kkkkk, tá ai a porta mermão: http://localhost:${port}/carros/adicionar-carro`);
});
>>>>>>> 6d33305eea0f1266cbdedfb7fef0e43a1a104d67
