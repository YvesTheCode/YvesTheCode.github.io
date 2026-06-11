//Mettre "" dans text leave va remettre le texte d'origine de yapbox (contenue dans textbasememo) on peut changer ce texte via d'autre js en changant le textContent de yapbox

let textbox = document.getElementById('yapbox')
let moi = document.getElementById('moi')
let blabla = {};
let textbasememo = textbox.textContent

if (window.location.protocol.startsWith("http")) {
fetch('blabla.json')
  .then(response => response.json())
  .then(data => {
    blabla = data;
    initDelegation();
  })
.catch(err => console.error("Erreur du chargement du JSON :", err));

function initDelegation() {

  document.addEventListener("mouseover", (e) => {
    const id = e.target.id;
    if (blabla[id] && blabla[id].enter) {
      const data = blabla[id].enter;
      yap(data.text, data.moigif);
    }
  });

  document.addEventListener("mouseout", (e) => {
    const id = e.target.id;
    if (blabla[id] && blabla[id].leave) {
      const data = blabla[id].leave;
      unyap(data.text, data.moigif);
    }
  });

}    

} else {
  console.warn("Offline RIP Fletch");
}

function yap(blablaTxt, moigifId) {

 

  textbasememo = textbox.textContent

  moi.src = "img/"+moigifId;
  moi.style.bottom = "0";

  setTimeout(() => {
    moi.style.bottom = "-6px";
  }, 100);

  let textmemo = "";
  let index = 0;

  textbox.textContent = "";

  intervalId = setInterval(() => {
    if (index < blablaTxt.length) {
      textmemo += blablaTxt.charAt(index);
      textbox.textContent = textmemo;

      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 10);
}

function unyap(blablaTxt, moigifId) {
  moi.style.bottom = "0";
  setTimeout(() => {
    moi.style.bottom = "-6px";
  }, 100);

  if (blablaTxt === "") {
    textbox.textContent = textbasememo
  }

  else{
    textbox.textContent = blablaTxt;
  }
  moi.src = "img/"+moigifId;

  textmemo = "";
  clearInterval(intervalId);
}

