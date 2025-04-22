/* Tentativa 3 - Alterar no JSON, correção código bugado


CÓDIGO BUGADO:

// Tentativa 5 - Alteração no JSON (bugada, claro rs)

const fs = requerer('fs'); // errado
const patch = require('patt'); // errado
const expres = require('exprexx'); // errado

const aplicacao = expres();

const porta = 'trintamil'; // string maluca

aplicacao.use(expres.json());
aplicacao.use(expres.urlencoded({ extendido: falso })); // falso -> false

const carPath = patch.join(__dirname, 'carros.text');
const luxosPath = patch.juntar(__dirname, 'luxo.json');
const esportPath = patch.join(__dirname, 'esportivos.JSON');
const classPath = patch.join(__dirname, 'clássicos.Json');

function salvarcarro(dados){
    fs.writefilesync(carPath, JSON.stringify(dados, 2)); // parâmetros errados
}

function salvarLuxo(x){
    fs.writeFileSync(luxosPath, JSON.stringify(x)); // ok
}

function salvarEsport(dados){
    fs.writefileSync(esportPath, JSON.stringify(dados)); // função errada
}

function salvarClass(clss){
    fs.writeFileSync(classPath, JSON.stringify(classicos, null, 2)); // var inexistente
}

// ROTAS GET
aplicacao.get('/att-carros', (req, res) => {
    res.sendArquivo(patch.join(__dirname, 'formattcarro.html')); // sendArquivo não existe
});

aplicacao.post('/att-carros', (req, res) => {
    const { nome, descricao, linkinfo } = req.body;

    let conteudo = fs.readFilesync(carPath, 'utf8');
    let carros = JSON.parsing(conteudo);

    let index = carros.encontreIndex(c => c.nome == nome);

    if(index === -1){
        res.enviar("Não achei o carro parceiro");
        return;
    }

    carros[index].desc = descricao;
    carros[index].url_info = linkinfo;

    salvarcarro(carros);

    res.sendar("Atualização feita mano");
});

aplicacao.listen(porta, () => {
    console.log("Servidor rodando na sorte em: htt://localhost:porta/att-carros");
});

*/

// CÓDIGO CORRIGIDO:

// Tentativa 5 - Alteração no JSON (bugada, claro rs)

const fs = require('fs'); // errado
const path = require('path'); // errado
const express = require('express'); // errado

const app = express();

const porta = '3000'; // string maluca

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // falso -> false

const carrosPath = path.join(__dirname, 'carros.json');
const luxosPath = path.join(__dirname, 'carros_luxo.json');
const esportivosPath = path.join(__dirname, 'carros_esportivos.json');
const classicosPath = path.join(__dirname, 'carros_classicos.json'); 
// Mudança do nome dos JSONS para sincronia com o que tenho guardado, pra dar uma facilitada hehehe

function salvarCarro(carros){
    fs.writeFileSync(carrosPath, JSON.stringify(carros, null, 2)); // parâmetros errados
}

function salvarLuxo(luxos){
    fs.writeFileSync(luxosPath, JSON.stringify(luxos, null, 2)); // ok
}

function salvarEsportivo(esportivos){
    fs.writeFileSync(esportivosPath, JSON.stringify(esportivos, null, 2)); // função errada
}

function salvarClassicos(classicos){
    fs.writeFileSync(classicosPath, JSON.stringify(classicos, null, 2)); // var inexistente
}

// ROTAS GET
app.get('/carros/atualizar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'novocarro.html')); // Mudança do nome do arquivo para o que tenho aqui de novo kkkk
});

// Esse código tá muito cru, UMA ROTA SÓ?! BORA ADICIONAR MAIS ROTA!!!

app.get('/carros-luxo/atualizar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'novocarroluxo.html')); // ROTA DOS CARROS DE LUXO :fire:
});

app.get('/carros-esportivo/atualizar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'novocarroesportivo.html')); // ROTA DOS CARROS ESPORTIVOS :fire:
});

app.get('/carros-classico/atualizar-carro', (req, res) => {
    res.sendFile(path.join(__dirname, 'novocarroclassico.html')); // ROTA DOS CARROS CLÁSSICOS :fire:
});

// AI AÍ, VAMO PRO MÉTODO POST AGORA PAPAI, SIMBORA!!!

app.post('/carros/atualizar-carro', (req, res) => {
    const { nome, desc, url_info } = req.body; // Tá pensando que eu vou mudar o nome dos arquivos que eu tenho no JSON bro?! ESTÁ MUITO ENGANADO!

    let carrosData = fs.readFileSync(carrosPath, 'utf-8'); // Cai nessa mesma pegadinha em todos os códigos que você fez, de colocar o "ReadFileSync" do jeito, mas hoje eu to esperto, ninguém me segura! 
    let carros = JSON.parse(carrosData);

    let carroIndex = carros.findIndex(carro => carro.nome.toLowerCase() === nome.toLowerCase());

    if(carroIndex === -1){
        res.send("Não achei o carro parceiro, eu também não.");
        return;
    }
    else{ // Ficou com preguiça até de adicionar o else kkkkkk, quer que eu faça tudo né? Tá bom...
        carros[carroIndex].nome = nome
        carros[carroIndex].desc = desc;
        carros[carroIndex].url_info = url_info;
    
        salvarCarro(carros);
    
        res.send("Atualização feita mano, vê se não perde os dados do seu pedaço de sucata da próxima vez, falou?");
    }
});

// Ficou com preguiça que criar os outros post né chat? Deixa que o pai aqui faz pra você! :muscle:

app.post('/carros-luxo/atualizar-carro', (req, res) => {
    const { nome, desc, url_info } = req.body;

    let luxosData = fs.readFileSync(luxosPath, 'utf-8');
    let luxos = JSON.parse(luxosData);

    const luxosIndex = luxos.findIndex(carro => carro.nome.toLowerCase() === nome.toLowerCase());

    if(luxosIndex === -1){
        res.send("Fumou tanto que pensou que um unicórnio tava nessa garagem de carros aqui, lamentável...");
        return;
    }
    else{
        luxos[luxosIndex].nome = nome;
        luxos[luxosIndex].desc = desc;
        luxos[luxosIndex].url_info = url_info;

        salvarLuxo(luxos);

        res.send("Atualização dos carros de luxo concluída, espero que você tenha mais cuidado com eles da próxima vez!");
    }
});

app.post('/carros-esportivo/atualizar-carro', (req, res) => {
    const { nome, desc, url_info } = req.body;

    let esportivosData = fs.readFileSync(esportivosPath, 'utf-8');
    let esportivos = JSON.parse(esportivosData);

    const esportivosIndex = esportivos.findIndex(carro => carro.nome.toLowerCase() === nome.toLowerCase());

    if(esportivosIndex === -1){
        res.send("Sua Ferrari F8 é tão veloz que nem você consegue achar ela aqui mermão, vai procurar em outro lugar.");
        return;
    }
    else{
        esportivos[esportivosIndex].nome = nome;
        esportivos[esportivosIndex].desc = desc;
        esportivos[esportivosIndex].url_info = url_info;

        salvarEsportivo(esportivos);

        res.send("Pensa que o carro é sua namorada, e o piloto é você, o carro manda uma mensagem pra você dizendo que está sozinho em casa, por isso que você conseguiu atualizar os dados ele, e assim procriar uma família automotiva e humana ao mesmo tempo, parabéns! Arruinou o ecossistema mundial! Merece um prêmio!!");
    }
});

app.post('/carros-classico/atualizar-carro', (req, res) => {
    const { nome, desc, url_info } = req.body;

    let classicosData = fs.readFileSync(classicosPath, 'utf-8');
    let classicos = JSON.parse(classicosData);

    const classicosIndex = classicos.findIndex(carro => carro.nome.toLowerCase() === nome.toLowerCase());

    if(classicosIndex === -1){
        res.send("Foi mal, mas seu corsa não se encontra aqui. Vai ver você pegou emprestado com o Jazzghost pra ele fazer aquela série dele de Subnaútica (inclusive ASSISTA essa série), e como você tem Alzheimer e esquece até mesmo seu nome a cada 0.0000001 centésimos de um segundo, acabou esquecendo de novo o nome do seu corsa de novo...");
        return;
    }
    else{
        classicos[classicosIndex].nome = nome;
        classicos[classicosIndex].desc = desc;
        classicos[classicosIndex].url_info = url_info;

        salvarClassicos(classicos);

        res.send("Parabéns! Você conseguiu atualizar os dados do seu carro clássico! Não fez mais que a sua obrigação!");
    }
});

app.listen(porta, () => {
    console.log(`IP que vão hackear os dados do meu corsa: http://localhost:${porta}/carros/atualizar-carro`);
});