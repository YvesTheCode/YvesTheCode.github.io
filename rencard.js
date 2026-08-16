let entre = document.getElementById('submit1')


let questiontxt = document.getElementById('question')
let lasttxt = document.getElementById('lastquestion')
let reponsetxt = document.getElementById('yapbox')
let historique = document.getElementById("histoire")
let passe = document.getElementById("dialogue")

let videmoi = document.getElementById("videmoi")
let minimoi = document.getElementById("minimoi")
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
let timeoutgif
let memogif
let ontourne

let precharge = [

  "q1_1.gif",
  "q2_1.gif",
  "q3_1.gif",
  "q4_1.gif",
  "q5_1.gif",
  "q8_1.gif",

  "q3_2.gif",
  "q1_4.gif",
  "q6_3.gif",
  "q1_12.gif",
  "q1_9.gif",
  "q18_3.gif",
  "q7_1.gif",
  "q1_2.gif",
  "q3_3.gif",
  "q6_1.gif",
  "q9_2.gif",
  "q9_3.gif",

  "q7_2.gif",
  "q1_3.gif",
  "q4_2.gif",
  "q5_2.gif",
  "q5_3.gif",
  "q7_3.gif",
  "q8_2c.gif",
  "q3_4.gif",
  "q6_1c.gif",
  "q7_10.gif",
  "q7_4.gif",
  "q8_2e.gif",

  "q1_5.gif",
  "q7_5.gif",
  "q1_6.gif",
  "q6_2c.gif",
  "q7_6.gif",

  "q1_7a.gif",
  "q1_7b.gif",
  "q7_7.gif",
  "q1_8a.gif",
  "q1_8b.gif",

  "q1_10.gif",
  "q1_11.gif",

  "q6_1a.png",
  "q6_2a.png",
  "q6_3a.png",
  "q7_1a.png",
  "q8_2.png",
  "q15_2stop.png",
  "q15_1stop.png",
  "q17_1astop.png",
  "q17_1b.png",
  "q3_4stop.png",
  "q1_2stop.png",
  "q1_3stop.png",
  "q1_4stop.png",
  "q1_5stop.png",
  "q1_6stop.png",
  "q1_9stop.png",
  "q1_10stop.png",
  "q1_11stop.png",
  "q1_12stop.png",
  "q2_1stop.png",
  "q3_2stop.png",
  "q3_1stop.png",
  "q3_3stop.png",
  "q4_1stop.png",
  "q4_2stop.png",
  "q5_1.png",
  "q5_2.png",
  "q5_3stop.png",
  "q6_1stop.png",
  "q6_1b.png",
  "q6_2b.png",
  "q6_3b.png",
  "q7_2stop.png",
  "q7_3stop.png",
  "q7_4stop.png",
  "q7_5stop.png",
  "q7_6stop.png",
  "q7_7stop.png",
  "q7_10stop.png",
  "q8_1stop.png",
  "q8_2a.png",
  "q9_2stop.png",
  "q9_3stop.png",
  "q1_1stop.png",
  "q6_3stop.png",
  "q17_1stop.png",
  "q18_3stop.png",
  "q1_7stop.png",
  "q1_8stop.png",
  "q6_3c.png",
  "q7_1stop.png",
  "q8_2b.png",
  "q6_1cstop.png",
  "q6_2stop.png",
  "q8_2d.png",
  "q8_2stop.png"
];

let index = 0

let prechargement = setInterval(() => {
  minimoi.src = "img-pp/" + precharge[index++]
   console.log(index)
  if (index >= precharge.length){
    clearInterval(prechargement)
  }
}, 2000);

function tapetxt() {
  
  clearInterval(intervalId);

  let texte = questionTrouvee.reponse[randomarray][memoyap];

  let textmemo = "";
  let i = 0;
  memogifs = 0

  function tournegif(memogif) {
    videmoi.src = "img-pp/"+ questionTrouvee.gifs[randomarray][memoyap][memogif]
    timeoutgif = setTimeout(() => {
      videmoi.src = "img-pp/"+ questionTrouvee.gifs[randomarray][memoyap][memogif+2]
      if (!questionTrouvee.gifs[randomarray][memoyap][memogif+2].replace(/\.[^/.]+$/, "").toUpperCase().endsWith("STOP")){
        memogifs = memogif+2
        //Pas fini
        tournegif(memogifs)
      }
      else{
        //Fini
        return
      }
    },questionTrouvee.gifs[randomarray][memoyap][memogif+1])

  }
  tournegif(memogifs)

  indicpass.style.display = "none"

  intervalId = setInterval(() => {
    if (i < texte.length) {
      textmemo += texte.charAt(i);
      reponsetxt.innerHTML = textmemo;
      i++;
      reponsetxt.innerHTML += "<span class='end'>▮</span>"
    } else {
      anitxt()
      indicpass.style.display = "block"
      clearInterval(intervalId);
    }
  }, 10)
  
};

entre.addEventListener("click", function() {



  questiontxt.textContent = "...?"
  indicpass.style.display = "none"
  clearTimeout(timeoutclong)
  clearTimeout(timeoutgif)

  questionTrouvee = questcool.find(q => q.id.includes(codereponse)); 

  // if (codereponse === "000") {
  //   alert('paque')
  // }

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
function anitxt() {
  document.querySelectorAll('.wave').forEach(element => {
  let text = element.textContent;

  element.innerHTML = [...text]
    .map((char, index) =>
      {if (char === ' ') {
        return ' ';
      } else {
        return "<span style='--i:"+index+"'>"+char+"</span>";
      }}
    )
    .join('');
});
}

passe.addEventListener("click", function() {
  
  clearTimeout(timeoutclong)
  clearTimeout(timeoutgif)

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



let tracker =  document.getElementById('tracker')
let comptehist = sessionStorage.getItem("contehist") || 0;
let tracksifini = sessionStorage.getItem("tracksifini") || false ;

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
    comptehist++
    sessionStorage.setItem("contehist",comptehist)
    tracker.innerHTML = '" complétion="'+comptehist+'/'+questcool.length+'">'
    if (comptehist==questcool.length) {
      tracksifini = true
      sessionStorage.setItem("tracksifini",tracksifini)
      innerunlock = "Franchement chapeau !"
      sessionStorage.setItem("innerunlock",innerunlock)
      unlock.innerHTML = innerunlock
    }

  }
}

unlock = document.getElementById("button1")
let isunlock = sessionStorage.getItem("ishist") || false
let innerunlock = sessionStorage.getItem("innerunlock") || "Débloquer l'essentiel<br>(Si tu as la flemme)"
unlock.innerHTML = innerunlock
unlock.addEventListener("click",function () {

  if (!isunlock && tracksifini === false) {
    
    if (window.confirm("Attention ! Tu ne seras plus légitime à savoir ce qu'il se passe si tu trouve toutes les questions par toi-même.")) {
      fullhistory()
      isunlock = true
      sessionStorage.setItem("ishist", isunlock);
      sessionStorage.setItem("histHTML", historique.innerHTML);
    }
  }
  else{
    alert("Si tu lis ce message, c'est que tu dois être investi alors je vais te partager un petit secret. Si tu veux en savoir plus sur le lore que je crée et voir plus de dessins à moi, va sur le seul compte que mon compte Instagram suit. Par contre ne descends pas trop, c'était un compte de pur shitpost avant et ya des trucs louches qui traînent...")
    console.log("Si tu lis ce message, c'est que tu dois être investi alors je vais te partager un petit secret. Si tu veux en savoir plus sur le lore que je crée et voir plus de dessins à moi, va sur le seul compte que mon compte Instagram suit. Par contre ne descends pas trop, c'était un compte de pur shitpost avant et ya des trucs louches qui traînent...")
  }

})
 

let questcool = [
  {
    "id": ["201", "102"],
    "question": ["qui es tu", "tu es qui"],
    "reponse": [["Je suis <span class='wave gay-wobble'>Yves</span>", "Née en 2004, passionné par le <span class='wave gay'>design</span> en général", "Je suis la personne qu'il te faut si tu cherches un esprit créatif dans un corps compétent","Je suis là pour t'aider à créer les projets qui te passionnent ou bien remplir le poste vacant dans ton entreprise.", "Je suis l'opportunité à ne pas manquer", "Le deal à ne pas refuser", "Le couteau le plus aiguisé de la banquise.", "Je suis pas un robot", "Je suis… donc je pense", "Je pense qu'on me suit plus", "Je suis tout ça et bien plus ! En bref je suis…", "Peut-être allé un peu loin."]],
    "gifs": [[["q1_1.gif",1200,"q3_4stop.png"],["q1_2.gif",1900,"q1_2stop.png"],["q1_3.gif",1800,"q1_3stop.png"],["q1_4.gif",2250,"q1_4stop.png"],["q1_5.gif",1000,"q1_5stop.png"],["q1_6.gif",1200,"q1_6stop.png"],["q1_7a.gif",1100,"q1_7b.gif",1200,"q1_7stop.png"],["q1_8a.gif",1000,"q1_8b.gif",800,"q1_8stop.png"],["q1_9.gif",2000,"q1_9stop.png"],["q1_10.gif",2200,"q1_10stop.png"],["q1_11.gif",1050,"q1_11stop.png"],["q1_12.gif",2000,"q1_12stop.png"]]],
    "blocked": false
  },
  {
    "id": ["164", "361"],
    "question": ["tu fais quoi", "que fais tu"],
    "reponse": [["Avec mes compétences, je fais toutes sortes de mises en page, comme des affiches, des flyers, tout ça tout ça", "Et je fais également des sites web que je code et designe."]],
    "gifs": [[["q2_1.gif",2500,"q2_1stop.png"],["q3_2.gif",1700,"q3_2stop.png"]]],
    "blocked": false
  },
  {
    "id": ["351", "154"],
    "question": ["tu veux quoi", "que veux tu"],
    "reponse": [["En ce moment, un job dans mon domaine d'expertise serait génial, dans une agence de graphisme ou un truc du genre.", "Je veux aussi pouvoir être commissionné comme mercenaire si quelqu'un a besoin d'aide pour un projet qu'il voudrait réaliser", "Genre pour un site web, des posts pour les réseaux, des mises en page, des chose dans ce goût là", "Pour résumer : mettre mes compétences à profit dans un cadre qui me plait."]],
    "gifs": [[["q3_1.gif",2500,"q3_1stop.png"],["q3_3.gif",3000,"q3_3stop.png"],["q3_2.gif",2200,"q3_2stop.png"],["q3_4.gif",2000,"q3_4stop.png"]]],
    "blocked": false
  },
  {
    "id": ["371", "174"],
    "question": ["que crées tu", "tu crées quoi"],
    "reponse": [["Je crée des sites, des scénarios, des identités graphiques, des bandes dessinées, des logos, des affiches, des jeux de société","J'en passe et des meilleurs", "Soit pour des clients, soit juste pour le <span class='wave gay-wobble'>fun</span>."]],
    "gifs": [[["q4_1.gif",3000,"q4_1stop.png"],["q3_2.gif",1200,"q3_2stop.png"],["q4_2.gif",1600,"q4_2stop.png"]]],
    "blocked": false
  },
  {
    "id": ["801", "108"],
    "question": ["où es tu", "tu es où"],
    "reponse": [["Dans une page web", "À l'intérieur d'un faux restaurant", "En train d'avoir un faux rencard avec je ne sais qui...", "Mais en vrai, je suis en Belgique, à Bruxelles plus précisément !"]],
    "gifs": [[["q5_1.gif",1200,"q5_1.png",5000,"q5_2.png",70,"q5_3stop.png"],["q5_2.gif",1600,"q5_2.png",5000,"q5_3stop.png"],["q5_3.gif",2000,"q5_3stop.png"],["q1_12.gif",2400,"q1_12stop.png"]]],
    "blocked": false
  },
  {
    "id": ["92016","10692"],
    "question": ["de qui es tu fais","tu es fais de qui"],
    "reponse": [["Mes inspirations ? Je dirais que tout ce que je vois et que je trouve sympa, je l'absorbe et le mélange à tout le reste.", "C'est un peu dur pour moi de dire ce qui m'inspire, car ça dépend du contexte et le spectre de trucs que je trouve <span class='wave wobble'>COOL</span> est assez large", "Mais je pourrais quand même te citer : Will Wood, Flavor Foley, Tales Unwritten, Glitch Production, Jack Stauber, Balo,", "Daniel Mullins, Wotaku, Odyk, Arcane, Riadh Bakache, Mystery Skulls, Bloqués, Adventure Time, Felix Colgrave, Kaamelott, Daria Cohen, Landfall, Caravane Palace, Vanripper, Pear哥, Dr Who, Team Fortress 2, Cosmo-P, Shug-…", "Et je vais m'arrêter là avant de te faire fuir."]],
    "gifs": [[["q3_1.gif",3500,"q3_1stop.png"],["q6_1.gif",3500,"q6_1stop.png"],["q6_1a.png",200,"q6_1b.png",200,"q6_1c.gif",3500,"q6_1cstop.png"],["q6_2a.png",300,"q6_2b.png",300,"q6_2c.gif",4500,"q6_2stop.png"],["q6_3a.png",200,"q6_3b.png",200,"q6_3c.png",200,"q6_3.gif",1200,"q6_3stop.png"]]],
    "blocked": false
  },
  {
    "id": ["94016","10694"],
    "question": ["de quoi es tu fais","tu es fais de quoi"],
    "reponse": [["Alors, comme tu peux le voir avec ce graphique", "Je suis fait à 24% de cheveux <span class='wave angy'>CHÂTAINS</span>", "À 16% d'informations trouvées dans les <span class='wave bold'>abysses</span> d'internet que j'aimerais oublier", "À 35% de très bonnes <span class='wave gay-wobble'>mauvaises idées</span>", "(le synonyme plus réaliste de la pensée divergente)", "À 29% de neurodivergence non diagnostiquée", "Et à 19% de chaussettes hautes.", "Le tout fait de moi quelqu'un de très compétent et créatif", "Je suppose.", "J'espère..."]],
    "gifs": [[["q7_1a.png",300,"q7_1.gif",1700,"q7_1stop.png"],["q7_2.gif",2200,"q7_2stop.png"],["q7_3.gif",2500,"q7_3stop.png"],["q7_4.gif",1600,"q7_4stop.png"],["q7_5.gif",2000,"q7_5stop.png"],["q7_6.gif",2000,"q7_6stop.png"],["q7_7.gif",1800,"q7_7stop.png"],["q7_1.gif",300,"q7_1a.png",300,"q1_3.gif",1500,"q1_3stop.png"],["q6_1.gif",1100,"q6_1stop.png"],["q7_10.gif",1100,"q7_10stop.png"]]],
    "blocked": true
  },
  {
    "id": ["3517", "1574"],
    "question": ["que veux tu créer", "tu veux créer quoi"],
    "reponse": [["J'aimerais créer des œuvres dont je pourrais être fier de montrer et qui pourraient rassasier mon envie de m'exprimer créativement.", "Et un jour, au sommet de ma <span class='wave angy'>GLOIRE</span>, je créerai mon éternel <span class='wave angy'>EMPIRE</span> !", "Mais ce n'est pas pour tout de suite, je ne suis pas pressé."]],
    "gifs": [[["q8_1.gif",5000,"q8_1stop.png"],["q8_2.png",150,"q8_2a.png",250,"q8_2b.png",250,"q8_2c.gif",1000,"q8_2d.png",150,"q8_2e.gif",2000,"q8_2stop.png"],["q3_3.gif",2500,"q3_3stop.png"]]],
    "blocked": false
  },
  {
    "id": ["8517", "98517","15798", "1578"],
    "question": ["où veux tu créer", "de où veux tu créer","tu veux créer de où", "tu veux créer où"],
    "reponse": [["Dans une entreprise où j'aurais l'opportunité et les moyens de mettre mes compétences en action", "Que ce soit dans l'infographie, le web design ou le développement.", "Si possible à Bruxelles", "Et ce serait cool d'être payé aussi.", "Mais je peux aussi créer depuis chez moi si le poste est en distanciel ou si c'est pour un client particulier."]],
    "gifs": [[["q8_1.gif",4500,"q8_1stop.png"],["q3_2.gif",2500,"q3_2stop.png"],["q3_1.gif",1500,"q3_1stop.png"],["q7_10.gif",2000,"q7_10stop.png"],["q1_2.gif",4000,"q1_2stop.png"]]],
    "blocked": false
  },
  {
    "id": ["178", "817", "9817", "1798","871","9871"],
    "question": ["tu crées où", "où tu crées", "de où tu crées", "tu crées de où", "où crées tu", "de où crées tu"],
    "reponse": [["Je crée principalement sur Figma en ce moment, mais je suis aussi très familier avec Illustrator et InDesign.", "Comme je n'ai pas le budget pour Adobe et qu'en plus c'est un peu des <span class='wave angy'>méchants</span>, j'utilise des alternatives comme Krita, Affinity et Figma du coup.", "Pour ce qui est du web, j'utilise VS Code", "Et je sais aussi faire de super PowerPoint avec des <span class='wave gay-wobble'>transitions animées</span> et tout !"]],
    "gifs": [[["q3_2.gif",4300,"q3_2stop.png"],["q9_2.gif",4500,"q9_2stop.png"],["q9_3.gif",2000,"q9_3stop.png"],["q1_3.gif",3000,"q1_3stop.png"]]],
    "blocked": false
  },
  {
    "id": ["104"],
    "question": ["tu es quoi"],
    "reponse": [["Je suis Web Designer et développeur Front-end.", "C'est grâce à ces compétences que j'ai codé ce sites.", "Je suis également Graphic Designer et infographiste, donc je fais aussi tout ce qui est identité visuelle.", "J'ai aussi fait une formation de 2 ans en UX/UI design, qui est focalisée sur l'utilisateur et son interface.", "La combinaison de tout ça fait de moi un designer très polyvalent, pouvant se décliner sur une multitude de supports et de contextes."]],
    "gifs": [[["q1_1.gif",1900,"q1_1stop.png"],["q9_3.gif",2000,"q9_3stop.png"],["q4_2.gif",4300,"q4_2stop.png"],["q2_1.gif",4300,"q2_1stop.png"],["q8_1.gif",2000,"q1_5.gif",1500,"q8_1stop.png"]]],
    "blocked": false
  },
  {
    "id": ["1572", "2517", "172", "271"],
    "question": ["tu veux créer qui", "qui veux tu créer", "tu crées qui", "qui crées tu"],
    "reponse":[["<span class='wave wobble'>Mmmmmmmmh</span>, je dirais Yves.", "Bien sûr, je ne peux pas me créer depuis zéro pour des raisons évidentes.", "Tout ce que je peux faire, c'est me créer en retirant des parties de moi et en les remplaçant petit à petit.", "Je sais pas si ça compte vraiment comme 'créer'.", "Pour ça, faudrait demander à Thésée ou à son avocat.", "Mais hors réflexion philosophique, je crée un tas de gens fictifs", "Pour des petites histoires aléatoires dans ma tête ou plus principalement pour mon univers de jeu de rôle."]],
    "gifs":[[["q3_1.gif",1700,"q3_1stop.png"],["q1_12.gif",3000,"q1_12stop.png"],["q3_3.gif",4200,"q3_3stop.png"],["q3_1.gif",2600,"q3_1stop.png"],["q6_3.gif",3000,"q6_3stop.png"],["q3_2.gif",3000,"q3_2stop.png"],["q3_3.gif",2000,"q3_4.gif",3000,"q3_4stop.png"]]],
    "blocked": true
  },
  {
    "id": ["152", "215", "251"],
    "question": ["tu veux qui", "qui tu veux", "qui veux tu"],
    "reponse": [["Je <span class='wave wobble'>TE</span> veux biensur !"]],
    "gifs":[[["q1_4.gif",1250,"q1_4stop.png"]]],
    "blocked": true
  },
  {
    "id": ["016922", "106922"],
    "question": ["es tu fais de ...", "tu es fais de ..."],
    "reponse": [["Bien sûr !","Je fais actuellement 445120 bits !"]],
    "gifs":[[["q6_3.gif",1000,"q6_3stop.png"],["q9_3.gif",1600,"q9_3stop.png"]]],
    "blocked": true
  },
  {
    "id": ["01215", "10215"],
    "question": ["es tu ...", "tu es ..."],
    "reponse": [["Pas vraiment… mais je travaille dessus","Un jour je serai meilleur","Un jour je serai ▮▮▮▮."]],
    "gifs":[[["q15_2stop.png",100,"q15_2stop.png"],["q15_1stop.png",100,"q15_1stop.png"],["B",1000,"q1_1.gif",10,"q18_3.gif",100,"q3_1.gif",10,"q8_1.gif",10,"q5_3.gif",10,"q8_2e.gif",10,"q5_1.gif",10,"E",10,"q18_3.gif",100,"q3_1.gif",10,"q5_2.gif",10,"q5_3.gif",100,"q8_2e.gif",10,"L",10,"q18_3.gif",100,"q3_1.gif",10,"L",10,"q8_1.gif",10,"q5_3.gif",10,"q8_2e.gif",10,"q3_1.gif",10,"q5_2.gif",10,"q5_3.gif",100,"E",10,"q8_2e.gif",100,"pitie_stop.png"]]],
    "blocked": true
  },
  {
    "id": ["157", "17", "517", "71"],
    "question": ["tu veux crées","tu crées", "veux tu créer","crées tu"],
    "reponse": [["Eeeeh oui ? Ça dépend quoi je suppose..."]],
    "gifs":[[["q1_12.gif",1600,"q1_12stop.png"]]],
    "blocked": true
  },
  {
    "id": ["4"],
    "question": ["quoi"],
    "reponse": [["<span class='wave wobble'>...</span>","Farel"],["<span class='wave wobble'>...</span>","Feur"],["<span class='wave wobble'>...</span>","Feton"],["<span class='wave wobble'>...</span>","Neton"],["<span class='wave wobble'>...</span>","Redise"],["<span class='wave wobble'>...</span>","Que"],["<span class='wave wobble'>...</span>","De"]],
    "gifs": [[["q17_1astop.png",100,"q17_1astop.png"],["q17_1b.png",1000,"q17_1stop.png"]],[["q17_1astop.png",100,"q17_1astop.png"],["q17_1b.png",5000,"q5_2.png",70,"q5_3.gif",250,"q17_1stop.png"]],[["q17_1astop.png",100,"q17_1astop.png"],["q17_1b.png",1000,"q17_1stop.png"]],[["q17_1astop.png",100,"q17_1astop.png"],["q17_1b.png",1000,"q17_1stop.png"]],[["q17_1astop.png",100,"q17_1astop.png"],["q17_1b.png",1000,"q17_1stop.png"]],[["q17_1astop.png",100,"q17_1astop.png"],["q17_1b.png",1000,"q17_1stop.png"]],[["q17_1astop.png",100,"q17_1astop.png"],["q17_1b.png",1000,"q17_1stop.png"]],],
    "blocked": true
  },
  {
    "id": ["94"],
    "question": ["de quoi"],
    "reponse": [["Utilise l’historique pour me faire répéter."],["C'est plutôt clair nan ?"],["Fais un effort."],["Il y a un historique pour me faire répéter"]],
    "gifs":[[["q2_1.gif",1800,"q2_1stop.png"]],[["q1_9.gif",1000,"q1_9stop.png"]],[["q18_3.gif",1200,"q18_3stop.png"]],[["q2_1.gif",1800,"q2_1stop.png"]]],
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
    forgor = true
    videmoi.src = "img-pp/rencard.png"
    indicpass.style.display = "none"
    clearTimeout(timeoutclong)
    clearTimeout(timeoutgif)
    clearInterval(intervalId);
    reponsetxt.style.fontSize = "1.2rem"
    // Cherche l’objet dans questcool où idClique correspond à un des ids
    const questionTrouvee = questcool.find(q =>
      q.id.some(i => i.toString() === idClique)
    );

    if (questionTrouvee) {
      // Affiche la première question correspondante
      questiontxt.textContent = questionTrouvee.question[0] + " ?";
      reponsetxt.innerHTML = "[Pour réavoir la version animée appuyer sur 'Submit'] L'une des réponses completes : " + '"' + questionTrouvee.reponse[Math.round((Math.random() * ((questionTrouvee.reponse.length-1) - 0) + 0))] + '"'
      codereponse = idClique;  // garde le codereponse pour le switch
      // Remplir la réponse directement :
      // reponsetxt.textContent = questionTrouvee.reponse;
    } else {
      console.warn("Aucune question correspondante trouvée dans le tableau.");
    }
  }
});

tracker.innerHTML = '" complétion="'+comptehist+'/'+questcool.length+'">'