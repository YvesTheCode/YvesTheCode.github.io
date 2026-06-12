let memory = sessionStorage.getItem('memory')
// alert(memory) 
let main = document.querySelector(".main")
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")

let reponsetxt = document.getElementById('yapbox')

let projet_img = [
    { img:"meteo.png",img2:"missingdoor.png", video_soiree_yap:"Grossesoiree.mp4" }, 
    { img:"sips3intro.gif",img1:"sips3webp1.jpg", img2:"sips3webp2.jpg", img3:"sips3webp3.jpg", img4:"sips3note.jpg", img5:"sips3vinyle.jpg", img6:"sips3vinylemock.png" }, 
    { img:"sips5canette.png", video:"CANSAT.mp4", img2:"sips5picto.png" }, 
    { img:"monogatarou1.jpg",img2:"monogatarou2.jpg",img3:"monogatarou3.jpg",img4:"monogatarou4.jpg",img5:"monogatarou5.jpg",img6:"monogatarou6.jpg",img_imposteur_yap:"monogatarou7.jpg",img8:"monogatarou8.jpg",img9:"monogatarou9.jpg",img10:"monogatarou10.jpg",img11:"monogatarou11.jpg" },
    { img:"sips6affiche.gif", img2:"sips6notep1.jpg", img3:"sips6notep2.jpg", img4:"sips6notep3.jpg", img5:"sips6notep4.jpg", img7:"sips6Packaging.png", img_igor_yap:"sips6irl.jpg", video:"WillWestWood.mp4", img8:"sips6visu1.png", img9:"sips6visu2.png" }, 
    { img_biere_yap:"biere.jpg",img_photomort_yap:"medead.jpg", img_leboihallo_yap:"huile1.png" }, 
    { img_bozar_yap:"bozar.jpg", img_wok1_yap:"wok1.jpg", img_wok2_yap:"wok2.jpg", img4:"gatekeeper.jpg", img5:"iceberg.jpg", img_leboi_yap:"huile2.png", img_cougar1_yap:"cougare1.jpg", img_cougar2_yap:"cougare2.jpg" },
    { img:"ecoutep1.jpg", img2:"ecoutep2.jpg", img3:"ecoutep3.jpg", img4:"ecoutep4.jpg" },
    { img:"recilogo.jpg", img2:"reciaffiche.jpg", img3:"reciposte.jpg", img4:"recibrochure.jpg" },
    { img:"lyxv2loop.gif", video:"lyxv2.mp4", }, 
    { img_fruit_yap:"fruit.jpg", img_vegan1_yap:"veganlogo.jpg", img_vegan2_yap:"veganchart.jpg" }, 
    { img:"godscreen1.jpg" },
    { img:"moustachecahierp1.jpg", img2:"moustachecahierp2.jpg", img3:"moustachecahierp3.jpg", img4:"moustacheproto1.jpg", img5:"moustacheproto2.jpg" },
    { img:"BBcarte1.jpg", img2:"BBcarte2.jpg", img3:"BBcarte3.jpg", img4:"BBillu.jpg" }, 
    { img:"fnafbeta1.jpg", img2:"fnafbeta2.jpg", img3:"fnafbeta3.jpg", img4:"fnafbeta4.jpg", img5:"fnafbeta5.jpg" }, 
    { img:"nad1.jpg", img2:"nad5.jpg", img3:"nad2.jpg", img4:"nad3.jpg", img5:"nad4.jpg" },
    { img:"nawak1.jpg", img2:"nawak2.jpg", img3:"nawak3.jpg" }
];

let projetsTextes = [
  "Voici de petits échantillons de ce que j'ai pu faire durant mes trois ans d'études à l'INRACI. C'était encore que le début de mon parcours, mais ça leur donne un certain charme. (Il faut encore que je fouille de vieilles clés USB corrompues pour tenter de trouver plus d'archives des petits projets que j'ai pu faire à cette époque, donc more to come.)",

  "C'est mon examen de fin d'année de cinquième à l'INRACI, on devait designer le site et des produits dérivés d'un artiste au choix dans une liste. Mon dévoué s'est porté sur un groupe danois appelé Efterklang et leur album Piramida, qui est très bien (je n'ai aucune expertise musicale). Qui aurait cru qu'un album nommé Priamida pouvait comporter autant de rectangles.",

  "C'est mon second gros examen de sixième à l'INRACI. Les élèves dans la section électromécanique avaient pour projet de lancer une cannette remplie de graines dans l'espace (ou en tout cas très haut dans le ciel) et nous, on devait créer un logo, des pictogrammes, un mockup de canette 3D et un site pour expliquer le projet. J'ai failli péter un plomb durant sa conception, car je n'arrêtais pas de changer d'avis sur ce que je faisais, m'obligeant à refaire plusieurs fois chaque étape du projet (un pur plaisir). Mais je suis content du résultat final, surtout de mon site qui se navigue à l'envers pour imiter la cannette décollant et quittant la Terre, le storytelling est fou.",

  "Un jour, avec mes potes, on a voulu jouer au loup-garou mais on n'avait pas le jeu. Du coup, j'ai fait les cartes sur des post-it et, vu qu'on était en train de regarder Monogatari, j'y ai mis des personnages de l'animé dessus. Puis, un jour, j'ai décidé de vraiment designer les cartes et voici le résultat. J'ai aussi rajouté des rôles pour que personne ne soit juste un simple villageois. Fun fact : je ne suis pas spécialement fan de Monogatari ni même d'animé en général, donc justifier l'existence de tout ça est complexe, mais au moins le jeu est fun et jouable !",

  "Ce projet est mon TFE à l'INRACI, je devais inventer une collaboration entre un musicien, un artiste de mode au choix, et faire un tas de merch et autres objets promotionnels. L'identité visuelle que j'ai créée est un mélange d'image, de dessin papier scanné et de lyrics collés ensemble pour créer un tout punk et décalé représentant bien l'univers des deux artistes que j'ai choisis. Je suis très fier du résultat final et content d'avoir eu la note maximale en allant à l'encontre de tous les principes de base du design avec mon approche plus brutaliste. J'ai pu faire les choses à ma manière avec ce projet et ça a payé !",

  "Voilà tous les micro-projets et autres trucs cool que j'ai faits qui ne méritent pas d'avoir leur propre page (techniquement, ils mériteraient, mais je n'ai pas grand-chose à montrer).",

  "J'ai créé beaucoup de choses à l'Heff qui ne méritent pas forcément leur propre page, donc voici un petit best-of !",

  "C'est un fascicule que j'ai dû faire pour parler de trois genres de musique au choix. Donc voici ma sélection de genres que j'apprécie, avec des transitions aussi abruptes que celles de mes playlists.",

  "Un jour, une ASBL formidable au logo affreux a contacté les étudiants en design de l'Heff pour refaire leur identité visuelle, et voilà ma contribution.",

  "À la base, c'était un exercice que l'on m'a donné à l'Heff où on devait faire un petit site web. Vu que le thème du site était libre et que les consignes étaient très simples pour moi, j'en ai profité pour partir dans un délire en mêlant un scénario que j'avais créé et ma dernière lubie (ici la musique Reckless Battery Burns de Ghost) pour créer un faux site scientifique avec des relents d'ARG. Plus tard, j'ai repris ce site pour créer une version plus aboutie et j'ai pour ambition d'en faire une expérience immersive racontant une histoire au fur et à mesure que l'on décortique le site. Je travaille encore dessus aujourd'hui et finirai par recréer moi-même toutes les images du site que j'ai pour l'instant \"empruntées\".",

  "Durant ma formation d'UX/UI designer, j'ai travaillé sur pas mal de petits projets, dont voici une sélection non exhaustive.",

  "À la base, on devait juste créer une micro-app JavaScript permettant de deviner un nombre aléatoire, mais vu que je l'ai fait rapidement, je suis parti un peu loin et ai fini par me lancer dans un projet de jeu d'horreur. Aujourd'hui, le jeu est jouable, mais il n'y a pas encore toute la partie horreur et mystère que je souhaite implémenter.",

  "Le brief était de trouver un site pas top et de le redesigner en y apportant notre expertise d'UX/UI designer. J'ai choisi le site de Madame Moustache qui avait à l'époque un site catastrophique. Le style bien particulier de Madame Moustache m'a permis de me faire plaisir sur le design du prototype Figma, pour un résultat toujours aussi burlesque mais bien plus user-friendly !",

  "L'une de mes grandes passions est de créer des jeux de société. Celui-ci est une version plus poussée et cartoonesque de la roulette russe. Je ne vais pas expliquer les règles ici, car ça prendrait une plomb, mais en gros c'est la roulette russe, sauf que tout le monde a son propre flingue et que les morts peuvent te tirer dessus pour te tuer et revenir à la vie (en gros, c'est le bordel). Et pour matcher ce bordel, je me suis inspiré des vieux cartoons pour designer mes cartes. Le jour où le jeu sera jouable, tu pourras l'imprimer pour toi-même !",

  "Tu connais Five Nights at Freddy's ? Bien, un jour je me suis levé en me disant : \"Tiens, et si je codais FNAF en HTML, CSS et JavaScript ?\". Du coup, c'est ce que j'ai fait, et la partie code du jeu est finie. Il ne reste plus qu'à remplacer les placeholders et à ajouter du sound design, et le jeu sera jouable.",

  "On m'a gentiment demandé de faire un logo et un template de post Instagram sur Canva pour une coach animalière. Je lui ai donc, tout aussi gentiment, fait le full package avec un design système et tout.",

  "La plupart des jeux que je crée demandent des explications détaillées et ne sont pas vraiment sortables 'juste comme ça'. C'est pour ça que j'ai créé NaWaK, un jeu chaotique et injuste spécialement conçu pour les soirées où on ne veut pas se prendre la tête. Les cartes SI et ALORS servent à créer des règles à respecter sous peine de perdre des points, et les cartes NaWaK peuvent être tout et n'importe quoi. Aucune des règles du jeu n'est à respecter à la lettre, le fun passe avant tout."
];




function pop(meme) {

  if (memory == 0){
    minus.textContent = "<<< Loop"
  }

  if (memory == (projet_img.length -1)){
    plus.textContent = "Loop >>>"
  }

  const images = Object.entries(projet_img[meme]);

  reponsetxt.innerHTML = projetsTextes[meme]

  images.forEach(([key, src]) => {
    
    const printdiv = document.createElement("div");
    printdiv.id= key;
    if (printdiv.id.endsWith("_yap")) {
      printdiv.classList.add("hoveryap");
    };
    
    const printspan1 = document.createElement("span");
    const printspan2 = document.createElement("span");
    printdiv.classList.add("style-code", "hover-boop");
    printspan1.classList.add("tag", "open");
    printspan2.classList.add("tag", "close");


    main.appendChild(printdiv);
    if (src.toLowerCase().endsWith(".mp4")) {
      const video = document.createElement("video");

      video.src = "projet-img/" + src;
      video.controls = true;
      video.autoplay = false;
      video.id= key
      // video.loop = true;

      printspan1.innerHTML = "&lt;video&gt;";
      printspan2.innerHTML = "&lt;/video&gt;";

      printdiv.appendChild(printspan1);
      printdiv.appendChild(video);
      printdiv.appendChild(printspan2);
    } 
    else {
    
    const printimg = document.createElement("img");

    printdiv.classList.add("zoom-img")

    printimg.src = "projet-img/"+src;

    printspan1.innerHTML = "&lt;img"
    printspan2.innerHTML = "&gt;"

    printdiv.appendChild(printspan1);
    printdiv.appendChild(printimg);
    printdiv.appendChild(printspan2);
    }

  });

  setTimeout(() => {
  const ro = new ResizeObserver(() => {
    console.log("Main a changé de taille !");
      if (main.scrollWidth > main.clientWidth) {
      console.log("overflow");
      main.style.boxShadow = "15px 0 15px -10px  rgba(0, 0, 0, 0.75), -15px 0 15px -10px rgba(0, 0, 0, 0.75)"
    }
    else{
      main.style.boxShadow = "none"
    }
  });

  ro.observe(main);
  }, 500);

}
  
let zoomdiv = document.getElementById("zoom")
let zoomall = document.getElementById("zoom-all")
let zoomimg = document.getElementById("zoom-img")
let zoomout = document.getElementById("zoom-out")
let now = -1

pop(memory)


document.querySelectorAll(".zoom-img").forEach(zoom => {

  zoom.addEventListener("click", () => {
    
    const zoomchild = zoom.querySelector("img")
    main.style.pointerEvents = "none"
    zoomimg.src = zoomchild.src
    zoomall.style.display = "flex"
    zoomall.style.pointerEvents = "visible"
    zoomdiv.style.scale = 0.9
    setTimeout(() => {
      zoomdiv.style.scale = 1
    }, 50);

    // now = Object.keys(projet_img).indexOf(zoomchild.parentElement.id)
      
    if (zoomchild.parentElement.id in projet_img[memory]) {
      now = Object.keys(projet_img[memory]).indexOf(zoomchild.parentElement.id);
    }

});

zoomout.addEventListener('click',function () {
      now = -1
      zoomdiv.style.scale = 0.9
      setTimeout(() => {
        main.style.pointerEvents = "all"
        zoomall.style.display = "none"
        zoomall.style.pointerEvents = "none"
      }, 250);

    })

})

zoomdiv.addEventListener('click',function () {

        if ((now < ((Object.values(projet_img[memory]).length)-1))) {
          if (!Object.values(projet_img[memory])[now+1].match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
            now++
          }
        }

        if (now >= ((Object.values(projet_img[memory]).length)-1)) {
          now = -1
          if (!Object.values(projet_img[memory])[now+1].match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
            now++
          }
          
        }

        

        zoomimg.src = "projet-img/"+Object.values(projet_img[memory])[++now]

      });

let desc = {};
let descun = document.getElementById("desc")

if (window.location.protocol.startsWith("http")) {
  fetch('desc.json')
    .then(response => response.json())
    .then(datass => {
      desc = datass;
      attachEvents();
    })
    .catch(err => console.error("Erreur du chargement du JSON :", err));
} else {
  console.warn("Offline RIP Fetch");
  descun.innerHTML = "Si tu vois ce message c'est que tu es en mode offline"
}

function attachEvents() {


  let datass = desc
  let keys = Object.keys(desc);
 
  descun.innerHTML =datass[keys[memory]].texte;
  main.id = keys[memory]+"bla"
}

plus.addEventListener('click',function () {

  sessionStorage.removeItem("memory");
  ++memory

  // alert(memory)
  if (memory>=projet_img.length) {
    memory = 0
  }

  sessionStorage.setItem("memory",memory)
  location.reload();

})

minus.addEventListener('click',function () {

  sessionStorage.removeItem("memory");
  --memory

  // alert(memory)

  if (memory<0) {
    memory = projet_img.length-1
  }

  sessionStorage.setItem("memory",memory)
  location.reload();

})