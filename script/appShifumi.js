function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function mettreAJourScores() {
    document.getElementById("nbVictoires").innerHTML = nbVictoires;
    document.getElementById("nbNulles").innerHTML = nbNulles;
    document.getElementById("nbDefaites").innerHTML = nbDefaites;
}

let nbVictoires = 0;
let nbDefaites = 0;
let nbNulles = 0;

mettreAJourScores();

let choix = ["Pierre", "Feuille", "Ciseaux"];
let robot;

var pierre=document.getElementById("pierre");
pierre.addEventListener("click", function(){
    robot = choix[getRandomInt(3)];
    document.getElementById("choix").innerHTML = robot;
    if (robot == "Pierre") nbNulles++;
    if (robot == "Feuille") nbDefaites++;
    if (robot == "Ciseaux") nbVictoires++;
    mettreAJourScores();
});

var feuille=document.getElementById("feuille");
feuille.addEventListener("click", function(){
    robot = choix[getRandomInt(3)];
    document.getElementById("choix").innerHTML = robot;
    if (robot == "Pierre") nbVictoires++;
    if (robot == "Feuille") nbNulles++;
    if (robot == "Ciseaux") nbDefaites++;
    mettreAJourScores();
});

var ciseaux=document.getElementById("ciseaux");
ciseaux.addEventListener("click", function(){
    robot = choix[getRandomInt(3)];
    document.getElementById("choix").innerHTML = robot;
    if (robot == "Pierre") nbDefaites++;
    if (robot == "Feuille") nbVictoires++;
    if (robot == "Ciseaux") nbNulles++;
    mettreAJourScores();
});

var reset=document.getElementById("reset");
reset.addEventListener("click", function(){
    nbVictoires = 0;
    nbNulles = 0; 
    nbDefaites = 0; 
    mettreAJourScores();
})
