let nomVoiture = "Peugeot";
let x = 50;
let z = 5;
let w = 10;
let d = 15
document.getElementById('demo').innerHTML = "z vaux 5, w vaux 10, le résultat est " + (z+w);

function maFonction () {
    alert('Salut tout le monde');
}
maFonction();

alert(d)

let prenom = "John", nom = "Doe", age = 35;

alert ((10*5));
alert ((10/2));
alert((15/9));

let l = 10;
let k = 5;

l = (k+10);

function maFonctionDeRetour (){
    document.getElementById('demoRetour').innerHTML = "Bonjour !";
}
maFonctionDeRetour();

let myButton = document.getElementById('monBouton');
myButton.addEventListener('click', function (){
    alert('Mon bouton fonctionne');
})

let changeOver = document.getElementById('changeSurOver');
changeOver.style.height ='100px';
changeOver.style.width = '100px';
changeOver.addEventListener('mouseover', function () {
    changeOver.style.backgroundColor = 'red';
})

let txt = "une longue phrase";
let longueur = txt.length;
alert(longueur);

let str1 = 'Bonjour';
let str2 = 'le monde';
alert(str1 + ' ' + str2);

let listeVoiture = ["Renault", "Volvo", "Citroen"];
let maVoiture = listeVoiture[1];
listeVoiture.splice(0, 1, 'Ford');
alert(listeVoiture.length);
listeVoiture.pop();
let newListe = listeVoiture.push('Ferrari');


let rNumber = Math.random() * 100;

let fNumber = Math.round(51.2);
console.log(fNumber);

let nombreUn = 10;
let nombreDeux = 5;

if (nombreUn > nombreDeux) {
    alert('nombreUn est supérieur à nombreDeux');
}

let nombretrois = 10;
let nombreQuatre = 10;

if (nombretrois === nombreQuatre) {
    alert("nombreTrois est égal à nombreQuatre");
}

if (nombreUn !== nombreDeux) {
    alert("nombreUn n'est pas égal à nombreDeux");
}

for (let i = 0; i < 9; i++) {
    console.log(i);
}

let fruits = ["pomme", "banane", "poire"];
for (let i = 0; i < fruits.length; i++) {
    console.log([i])
}

let i = 0;
while (i < 10) {
    i++
    console.log(i);
}

let j = 0;
while (j < 10) {
    j += 2;
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        alert('Félicitations l\'exercice est terminé');
    }
}