let entre = document.getElementById('submit1')


let questiontxt = document.getElementById('question')
let lasttxt = document.getElementById('lastquestion')
let reponsetxt = document.getElementById('yapbox')
let historique = document.getElementById("histoire")
let passe = document.getElementById("dialogue")

let videmoi = document.getElementById("videmoi")
let indicpass = document.getElementById("indic")

historique.innerHTML = sessionStorage.getItem("histHTML") || "";

let questionmemo = ""
let codereponse = ""

let mots = ["es","tu","qui","que","quoi","veux","fais","crées·er","où","de","ours","fichtre"]
        //   0     1    2     3     4      5      6       7      8   9


let questionTrouvee = null;
let randomarray = 0;
let memoyap = 0;
let intervalId = null;
let forgor = false
let timeoutclong


function tapetxt() {
  
  clearInterval(intervalId);

  let texte = questionTrouvee.reponse[randomarray][memoyap];

  let textmemo = "";
  let i = 0;

  videmoi.src = "img-pp/rencardyap.gif"
  indicpass.style.display = "none"

  intervalId = setInterval(() => {
    if (i < texte.length) {
      textmemo += texte.charAt(i);
      reponsetxt.textContent = textmemo;
      i++;
      reponsetxt.textContent += "▮"
    } else {
      indicpass.style.display = "block"
      timeoutclong = setTimeout(() => {
        videmoi.src = "img-pp/rencard.png"
      }, 2100);
      clearInterval(intervalId);
    }
  }, 10)
  
};

entre.addEventListener("click", function() {

  questiontxt.textContent = "...?"
  indicpass.style.display = "none"
  clearTimeout(timeoutclong)

  questionTrouvee = questcool.find(q => q.id.includes(codereponse)); 

  reponsetxt.style.fontSize = "2rem"
  questionmemo = ""
  codereponse = ""

  if (!questionTrouvee) {
    videmoi.src = "img-pp/rencard.png"
    reponsetxt.textContent = "Parle bien par contre"
    return
  };

  forgor = false

  memoyap = 0

  randomarray = Math.round(Math.random() * (questionTrouvee.reponse.length-1))

  tapetxt()

  const index = questcool.indexOf(questionTrouvee);
  history(questionTrouvee.id[0], index);

});

passe.addEventListener("click", function() {
  
  clearTimeout(timeoutclong)

  if (!questionTrouvee) {
    reponsetxt.style.fontSize = "1.2rem"
    reponsetxt.textContent = "Si tu veux en apprendre plus sur moi, n'hésite pas à me poser des questions avec les mots et le bouton 'Submit' à gauche. Si tu souhaites réentendre ma réponse, il y a un historique à droite. Et si t'as vraiment la flemme, il y a un bouton en bas à droite pour aller droit au but (mais certaines réponses resteront cachées <3)."
    return
  };

  if (memoyap < questionTrouvee.reponse[randomarray].length - 1 && !forgor) {

    ++memoyap
    tapetxt()

  }

  else{
    indicpass.style.display = "none"
    reponsetxt.style.fontSize = "2rem"
    reponsetxt.textContent = "Vas-y pose moi une autre question ~~"
    videmoi.src = "img-pp/rencard.png"
  }



});



function quest(paramot) {

questionmemo += mots[paramot] + " "
questiontxt.textContent=questionmemo+"?"
codereponse += String(paramot)
console.log(codereponse)

}

mots.forEach((id, index) => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", function () {
      quest(index);
    });
  }
});



let dejahist = 0



function history(parahist, i) {
  if (!document.getElementById(parahist)) {
    const hist = document.createElement('span');
    const histbr = document.createElement('br');
    hist.id = parahist;
    hist.classList.add("btnhist");
    hist.classList.add("hover-boop");
    hist.textContent = questcool[i].question[0] + " ?"; // <-- prend la première question
    historique.appendChild(hist);
    historique.appendChild(histbr);
    sessionStorage.setItem("histHTML", historique.innerHTML);
  }
}

unlock = document.getElementById("button1")

unlock.addEventListener("click",function () {
  fullhistory()
    sessionStorage.setItem("histHTML", historique.innerHTML);
})

//Pour ajouté les photo correspondante au bout de réponse, gardé la même structurepour ue memoyap puis gérer les photos 
//Et mettre un autre champ avec la même strucutre pour dire si le gif se boucle ou non
//Ce que je viens de dire marche pas donc il y aura juste des gif puis d'autre des pm4 qui loop pas

let questcool = [
  {
    "id": ["201", "102"],
    "question": ["qui es tu", "tu es qui"],
    "reponse": [["Je suis Yves", "Née en 2004 et passionné par le design en général", "Je suis la personne qu'il te faut si tu cherches un esprit créatif dans un corps compétent","Je suis là pour t'aider à créer les projets qui te passionnent ou bien remplir le poste vacant dans ton entreprise.", "Je suis l'opportunité à ne pas manquer", "Le deal à ne pas refuser", "Le couteau le plus aiguisé de la banquise.", "Je suis pas un robot", "Je suis… donc je pense", "Je pense qu'on me suit plus", "Je suis tout ça et bien plus.", "En bref…", "Je suis… peut-être allé un peu loin."]],
    "blocked": false
  },
  {
    "id": ["164", "361"],
    "question": ["tu fais quoi", "que fais tu"],
    "reponse": [["Avec mes compétences, je peux faire des affiches ainsi que toutes sortes de mises en page", "Et aussi coder et designer des sites web."]],
    "blocked": false
  },
  {
    "id": ["351", "154"],
    "question": ["tu veux quoi", "que veux tu"],
    "reponse": [["En ce moment, un job dans mon domaine d'expertise serait génial, dans une agence de graphisme ou un truc du genre.", "Je veux aussi pouvoir être commissionné comme mercenaire si quelqu'un a besoin d'aide pour un projet qu'il voudrait réaliser", "Genre pour un site web, des posts pour les réseaux, des mises en page, des chose dans ce goût là", "Pour résumer : mettre mes compétences à profit dans un cadre qui me plait."]],
    "blocked": false
  },
  {
    "id": ["371", "174"],
    "question": ["que crées tu", "tu crées quoi"],
    "reponse": [["Je crée des sites, des scénarios, des identités graphiques, des bandes dessinées, des logos, des affiches, des jeux de société","J'en passe de des meilleurs", "Soit pour des clients, soit juste pour le fun."]],
    "blocked": false
  },
  {
    "id": ["801", "108"],
    "question": ["où es tu", "tu es où"],
    "reponse": [["Dans un faux restaurant", "Dans une page web", "Entrain d'avoir un faux rencard avec je sais pas qui !", "Mais en vrai, je suis en Belgique, à Bruxelles plus précisément !"]],
    "blocked": false
  },
  {
    "id": ["92016","10692"],
    "question": ["de qui es tu fais","tu es fais de qui"],
    "reponse": [["Mes inspirations ? Je dirais que tout ce que je vois et que je trouve sympa, je l'absorbe et le mélange à tout le reste.", "C'est un peu dur pour moi de dire ce qui m'inspire, car ça dépend du contexte et le spectre de trucs que je trouve cool est très large", "Mais je pourrais quand même te citer : Will Wood, Flavor Foley, Tales Unwritten, Glitch Production, Jack Stauber", "Daniel Mullins, Felix Colgrave, Landfall, Vanripper, Cosmo-P…", "Et je vais m'arrêter là avant de te faire fuir."]],
    "blocked": false
  },
  {
    "id": ["94016","10694"],
    "question": ["de quoi es tu fais","tu es fais de quoi"],
    "reponse": [["Alors, comme tu peux le voir avec ce graphique", "Je suis fait à 10% de cheveux CHÂTAINS", "À 35% d'informations trouvées dans les abysses d'Internet que j'aimerais oublier", "À 16% de très bonnes mauvaises idées", "(le synonyme plus réaliste de la pensée divergente)", "À 29% de neurodivergence non diagnostiquée", "Et à 11% de chaussettes hautes.", "Le tout fait de moi quelqu'un de très compétent et créatif", "Je suppose.", "J'espère..."]],
    "blocked": true
  },
  {
    "id": ["3517", "1574"],
    "question": ["que veux tu créer", "tu veux créer quoi"],
    "reponse": [["J'aimerais créer des œuvres dont je pourrais être fier de montrer et qui pourraient rassasier mon envie de m'exprimer créativement.", "Et un jour, au sommet de ma GLOIRE, je créerai mon EMPIRE !", "Mais ce n'est pas pour tout de suite, je ne suis pas pressé."]],
    "blocked": false
  },
  {
    "id": ["8517", "9517","15798"],
    "question": ["où veux tu créer", "de où veux tu créer","tu veux créer de où"],
    "reponse": [["Dans une entreprise où j'aurais l'opportunité et les moyens de mettre mes compétences en action", "Que ce soit dans l'infographie, le web design ou le développement.", "Si possible à Bruxelles", "Et ce serait cool d'être payé aussi.", "Mais je peux aussi créer depuis chez moi si le poste est en distanciel ou si c'est pour un client particulier."]],
    "blocked": false
  },
  {
    "id": ["178", "817", "9817", "1798","871","9871"],
    "question": ["tu crées où", "où tu crées", "de où tu crées", "tu crées de où", "où crées tu", "de où crées tu"],
    "reponse": [["Je crée principalement sur Figma en ce moment, mais je suis très familier avec Illustrator et InDesign.", "Comme je n'ai pas le budget pour Adobe et qu'en plus c'est un peu des méchants, j'utilise des alternatives comme Krita, Affinity et Figma du coup.", "Pour ce qui est du web, j'utilise VS Code", "Et je sais aussi faire de super PowerPoint avec des transitions et tout !"]],
    "blocked": false
  },
  {
    "id": ["104"],
    "question": ["tu es quoi"],
    "reponse": [["Je suis Web Designer et développeur Front-end.", "C'est grâce à ces compétences que j'ai codé ce sites.", "Je suis également Graphic Designer et infographiste", "Donc je fais aussi tout ce qui est identité visuelle.", "J'ai récemment fait une formation de 2 ans en UX/UI design, qui est focalisée sur l'utilisateur et son interface.", "La combinaison de tout ça fait de moi un designer très polyvalent, pouvant se décliner sur une multitude de supports et de contextes."]],
    "blocked": false
  },
  {
    "id": ["152"],
    "question": ["tu veux qui"],
    "reponse": [["Je veux Dr Who dans Overwatch."]],
    "blocked": true
  },
  {
    "id": ["016922"],
    "question": ["es tu fais de ..."],
    "reponse": [["Bien sûr !","Je fais actuellement 445120 bits !"]],
    "blocked": true
  },
  {
    "id": ["01215"],
    "question": ["es tu ..."],
    "reponse": [["Pas vraiment… mais je travaille dessus","Un jour je serai meilleur","Un jour je serai ▮▮▮▮."]],
    "blocked": true
  },
  {
    "id": ["157", "17"],
    "question": ["tu veux crées","tu crées"],
    "reponse": [["Eeeeh oui ? Ça dépend quoi je suppose..."]],
    "blocked": true
  },
  {
    "id": ["4"],
    "question": ["quoi"],
    "reponse": [["Farel"],["Feur"],["Feton"],["Neton"],["Rdise"],["Que"],["De"]],
    "blocked": true
  },
  {
    "id": ["94"],
    "question": ["de quoi"],
    "reponse": [["Utilise l’historique pour me faire répéter."],["C'est plutôt clair nan ?"],["Fais un effort"],["Il y a un historique pour me faire répéter"]],
    "blocked": true
  }
]

function fullhistory() {
  for (let index = 0; index < questcool.length; ++index) {
    const q = questcool[index];

    // Ignore les questions bloquées
    if (q.blocked) continue;

    // Vérifie si le bouton existe déjà dans l'historique
    if (!document.getElementById(q.id[0])) {
      const hist = document.createElement('span');
      const histbr = document.createElement('br');
      hist.id = q.id[0];                  // prend le premier id
      hist.classList.add("btnhist");
      hist.classList.add("hover-boop");
      hist.textContent = q.question[0] + " ?"; // prend la première formulation
      historique.appendChild(hist);
      historique.appendChild(histbr);
    }
  }
}



historique.addEventListener("click", function(event) {
  if (event.target.classList.contains("btnhist")) {
    const idClique = event.target.id.toString(); // force en string
    console.log("Bouton historique cliqué :", idClique);
    forgor = true
    videmoi.src = "img-pp/rencard.png"
    indicpass.style.display = "none"
    clearTimeout(timeoutclong)
    clearInterval(intervalId);
    reponsetxt.style.fontSize = "1.2rem"
    // Cherche l’objet dans questcool où idClique correspond à un des ids
    const questionTrouvee = questcool.find(q =>
      q.id.some(i => i.toString() === idClique)
    );

    if (questionTrouvee) {
      // Affiche la première question correspondante
      questiontxt.textContent = questionTrouvee.question[0] + " ?";
      reponsetxt.textContent = "[Pour réavoir la version animée appuyer sur 'Submit'] L'une des réponses completes : " + '"' + questionTrouvee.reponse[Math.round((Math.random() * ((questionTrouvee.reponse.length-1) - 0) + 0))] + '"'
      codereponse = idClique;  // garde le codereponse pour le switch
      // Remplir la réponse directement :
      // reponsetxt.textContent = questionTrouvee.reponse;
    } else {
      console.log("Aucune question correspondante trouvée dans le tableau.");
    }
  }
});