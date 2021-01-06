/* var fruta = { nome: "maça", cor: "vermelha" };
console.log(fruta);
console.log(fruta.cor);
alert(fruta.nome); 

##################################

var frutas = [
    { nome: "maça", cor: "vermelha" },
    { nome: "uva", cor: "roxa" },
    { nome: "banana", cor: "verde" },
    { nome: "Limão", cor: "verde" },
];
console.log(frutas);
alert(frutas[1].nome);*/

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("Maior de Idade!");
} else {
    alert("Menor de Idade!");
}
*/

/* 
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count = count + 1;
}

var count;
for (count = 1; count <= 5; count++) {
    alert(count);
}
*/

var d = new Date();

/* 
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth() + 1); */

console.log(d);
console.log("Dia " + d.getDay());
console.log(
    "The getDay() method returns the day of the week (from 0 to 6) for the specified date."
);
console.log("Hora " + d.getHours());
console.log("Minuto " + d.getMinutes());
console.log("Mês " + (d.getMonth() + 1));
console.log(
    "The getMonth() method returns the month (from 0 is january to 11 is december) for the specified date, according to local time."
);
