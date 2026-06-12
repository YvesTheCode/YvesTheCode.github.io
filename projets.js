let buttplus = document.getElementById('buttonplu')
let buttmoin = document.getElementById('buttonmin')

let case1 = document.getElementById('case1')
let case2 = document.getElementById('case2')
let case3 = document.getElementById('case3')

let projets = [
    { id:"projet8",  titre:"Medley-Inraci",    img:"medleyinraci.jpg"},
    { id:"projet5",  titre:"Efterklang",       img:"sips3intro.gif"},
    { id:"projet6",  titre:"Végécan",          img:"sips5canette.png"},
    { id:"projet7",  titre:"Monogatarou",      img:"monogatarou3.jpg"},
    { id:"projet1",  titre:"Will-WestWood",    img:"sips6visu1.png"},
    { id:"projet3",  titre:"Medley",           img:"medleytempo.gif"},
    { id:"projet11", titre:"Medley-Heff",      img:"medleyheff.jpg"},
    { id:"projet9",  titre:"ECOUTE!",          img:"ecoute.jpg"},
    { id:"projet10", titre:"RéCI",             img:"reciposte.jpg"},
    { id:"projet2",  titre:"Projet-Lyx",       img:"lyxv2loop.gif"},
    { id:"projet14", titre:"Medley-Efp",       img:"medleyefp.jpg"},
    { id:"projet12", titre:"G.O.D",            img:"godscreen.jpg"},
    { id:"projet13", titre:"Madame-Moustache", img:"moustachelogo.png"},
    { id:"projet4",  titre:"Bang!-Bang!",      img:"BB.png"},
    { id:"projet15", titre:"Fnaf-Js",          img:"fnafbeta1.jpg"},
    { id:"projet16", titre:"Coaching-Animal",  img:"nad0.svg"},
    { id:"projet17", titre:"NaWaK",            img:"nawak.jpg"},
];
let i = 4

function update_projets(ind) {

    if (i == (projets.length - 3)) {
        buttplus.textContent = "Loop >>>"
    }
    else{
        buttplus.textContent = "Plus récent >>>"
    }

    if (i == 0) {
        buttmoin.textContent = "<<< Loop "
    }
    else{
        buttmoin.textContent = "<<< Plus ancien"
    }

    if (ind<=(projets.length)-3 && ind>=0) {

        case1.children[0].textContent="<"+projets[ind].titre+">"
        case1.children[2].textContent="</"+projets[ind].titre+">"
        case1.children[1].children[0].src="projet-img/"+projets[ind].img
        case1.children[1].children[0].id=projets[ind].id +"bla"
        case1.id=projets[ind].id

        case2.children[0].textContent="<"+projets[ind+1].titre+">"
        case2.children[2].textContent="</"+projets[ind+1].titre+">"
        case2.children[1].children[0].src="projet-img/"+projets[ind+1].img
        case2.children[1].children[0].id=projets[ind+1].id +"bla"
        case2.id=projets[ind+1].id

        case3.children[0].textContent="<"+projets[ind+2].titre+">"
        case3.children[2].textContent="</"+projets[ind+2].titre+">"
        case3.children[1].children[0].src="projet-img/"+projets[ind+2].img
        case3.children[1].children[0].id=projets[ind+2].id +"bla"
        case3.id=projets[ind+2].id

    }

    else{i=0
        update_projets(i)
    }

    if (ind<0) {
        i=(projets.length)-3
        update_projets(i)
    }
}

update_projets(i)

buttplus.addEventListener('click',function () {
   ++i

   update_projets(i)
})


buttmoin.addEventListener('click',function () {
   --i
   update_projets(i)
})

let carousel = document.getElementById('carousel')
let index = -1

for (var bonrandom=[],iff=0;iff<projets.length;++iff) bonrandom[iff]=iff;

function shuffle(array) {
  var randomemo, shuffler, bout = array.length;
  if(bout) while(--bout) {
    shuffler = Math.floor(Math.random() * (bout + 1));
    randomemo = array[shuffler];
    array[shuffler] = array[bout];
    array[bout] = randomemo;
  }
  return array;
}
bonrandom = shuffle(bonrandom)

function goround() {


   if (index === (projets.length) -1) {
        console.log("Tu t'es endormis ?")
        index = -1
        
    }

    index++

    carousel.children[0].textContent="<"+projets[bonrandom[index]].titre+">"
    carousel.children[2].textContent="</"+projets[bonrandom[index]].titre+">"
    carousel.children[1].children[0].src="projet-img/"+projets[bonrandom[index]].img
}

goround()


mary = setInterval(goround, 5000);

carousel.addEventListener('mouseenter',function () {
    clearInterval(mary)
})

carousel.addEventListener('mouseleave',function () {
   mary = setInterval(goround, 5000);
})

let pro = document.querySelectorAll(".projet")


pro.forEach(c => c.addEventListener("click", () => {
    sessionStorage.removeItem("memory");
//   alert(c.id)
    if(c.id==="carousel"){
        sessionStorage.setItem("memory",bonrandom[index])
    }
    else{
        sessionStorage.setItem("memory",projets.findIndex(p => p.id === c.id))
    }

    window.location.assign("projets-flex.html");
}));

let buttflem = document.getElementById('flemme')

buttflem.addEventListener("click", function () {
    window.open("https://1drv.ms/f/c/6dec6061a73aae5b/IgBGJdM84bVUSLL7yFeZXlX_AYs_LKShJoqaUo96SQ2d7o0","_blank");
})