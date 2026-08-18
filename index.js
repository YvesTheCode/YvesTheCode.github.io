let goprojet = document.getElementById('vers-projet')

let gorecent = document.getElementById('projet-recent')

let gonouveau = document.getElementById('derniere-ajout')


goprojet.addEventListener('click', function() {

    window.location.assign('projets.html')

})


gorecent.addEventListener('click', function() {
    sessionStorage.removeItem("memory");

    sessionStorage.setItem("memory",14)
    window.location.assign("projets-flex.html");
})

gonouveau.addEventListener('click', function() {
    sessionStorage.removeItem("memory");

    sessionStorage.setItem("memory",16)
    window.location.assign("projets-flex.html");
})

let distit = document.getElementById('titre')
let dissutit = document.getElementById('sutitre')

let titres = [
    {
      "tit" : "SITE",
      "sutit" : "Un portfolio interactif, fait de zéro pour t'en mettre plein la vue !"
    },

    {
      "tit" : "GRAPHIC DESIGNER",
      "sutit" : "Infographe mercenaire prêt à faire toute sorte de mise en page ou identité graphique."
    },

    {
      "tit" : "WEB DESIGNER",
      "sutit" : "Si vous avez besoin d'un site internet, je suis votre ▮▮▮▮▮ ! Je m'occupe du front-end des sites web, du low-fidelity jusqu'au codage du HTML, CSS et JS."
    },

    {
      "tit" : "UX/UI DESIGNER",
      "sutit" : "Vous ne savez pas ce que c'est ? Moi non plus (jusqu'à récemment)! En gros, je me focalise sur l'utilisateur pour adapter l'interface et améliorer son expérience."
    },

    {
      "tit" : "CHÔMEUR",
      "sutit" : "Un emploi ne serait pas de refus et tout ce site est conçu pour vous convaincre de mes compétences.",
    },

    {
      "tit" : "COPILOTE",
      "sutit" : "J'offre ma supervision sur vos projets durant des appels en ligne. Je suis là si vous avez besoin d'un coup de main ou des questions sur le logiciel que vous utilisez."
    },
]

let index = 0

function tournetit() {
index++
if (index>=titres.length) {
    index = 0
}
distit.innerHTML = titres[index].tit
dissutit.innerHTML = titres[index].sutit    
}

let tournetits = setInterval(tournetit,5000);

let charge = document.getElementById('charge')

let indexx = 0

function tournecharge(params) {
    indexx++
    charge.innerHTML = charge.innerHTML + "▮"
    if (indexx>4) {
        charge.innerHTML = "▮"
        indexx = 0
    }
}

let turnecharge = setInterval(tournecharge,1000)