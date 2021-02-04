/* 
relação dos números referentes a cada cor
0 - verde
1 - vermelho
2 - amarelo
3 - azul
*/

let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

/* Estabelece as variáveis dos sons */
var beep = document.getElementById("beep");
var error = document.getElementById("error");
var toque = document.getElementById("toque");

/* Cria ordem aleatória de cores */
let shuffleOrder = () => {
    /* 
    A função Math.floor(x) retorna o menor número inteiro dentre o número "x" 
    multiplicado por 4 pois sempre irá sortear um número de 0 a 3.
    */

    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    /*
    Para acender a cor do número sorteado é criado um índice i que é gerado
    a cada FOR e armazenado para ser trocado por um array.
    */

    for (let i in order) {
        beep.play();
        let elementColor = createColorElement(order[i]);
        beep.play();
        lightColor(elementColor, Number(i) + 1);
        beep.play();
    }
};

/* Acende a próxima cor */
let lightColor = (element, number) => {
    beep.play();
    number = number * 500;
    setTimeout(() => {
        beep.play();
        element.classList.add(".selected");
        beep.play();
    }, number - 250);

    setTimeout(() => {
        beep.play();
        element.classList.remove(".selected");
        beep.play();
    });
};

/* Checa se os botôes clicados são os mesmos da ordem gerada no jogo */
let checkOrder = () => {
    for (let i in checkedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            error.play();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert("Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!");
        nextLevel();
    }
};

/* Função para o CLIQUE do usuário */
let click = (color) => {
    toque.play();
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        toque.play();
        createColorElement(color).classList.remove("selected");
        checkOrder();
    }, 250);
};

/* Função que retorna a Cor */
let createColorElement = (color) => {
    if (color == 0) {
        return green;
        beep.play();
    } else if (color == 1) {
        return red;
        beep.play();
    } else if (color == 2) {
        return yellow;
        beep.play();
    } else if (color == 3) {
        return blue;
        beep.play();
    }
};

/* Função para o próximo nível do jogo */
let nextLevel = () => {
    score++;
    shuffleOrder();
    beep.play();
};

/* Função para quem perde o jogo (GAME OVER) */
let gameOver = () => {
    error.play();

    alert(
        "Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo"
    );
    order = [];
    clickedOrder = [];

    playGame();
};

/* Função de início do JOGO */
let playGame = () => {
    alert("Bem vindo ao Gênius!\nIniciando um novo jogo!");
    score = 0;

    nextLevel();
};

/*
    green.addEventListener('click', click(0));
    red.addEventListener('click', click(1));
    yellow.addEventListener('click', click(2));
    blue.addEventListener('click', click(3));
*/

/* Eventos de clique para as cores */
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

/* Início do Jogo */
playGame();
