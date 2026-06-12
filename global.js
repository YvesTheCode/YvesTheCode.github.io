document.querySelectorAll(".hover-boop").forEach(el => {
  let audio;
  let audiotimeout
  el.addEventListener("mouseenter", () => {
    audio = new Audio('bruit/2039.mp3');
    audio.currentTime = 0;
    audio.volume = 0.1
    audiotimeout = setTimeout(() => {
          audio.play().catch(err => {
    });
    }, 100);

  });

  el.addEventListener("mouseleave", () => {
    if (audio) {
      clearTimeout(audiotimeout)
      audio.currentTime = 0;
      audio.pause();      
      
    }

  });
  
});



let sortie = sessionStorage.getItem('sortie')

let anav = document.getElementById('anav')
let inputnav = document.getElementById('inputnav')

if (sortie === null) {
  sortie  = "sorti.html"
}
else{
  if (sortie.trim() === "") {
      sortie  = "sorti.html"
  }
  else{
      inputnav.value = sortie
  }

}

anav.addEventListener("click", async (e) => {
  e.preventDefault();

  sessionStorage.setItem("sortie", inputnav.value);

  const file = inputnav.value.trim();
  const audio = new Audio("bruit/20839.mp3");

  if (!file.endsWith(".html")) {
    audio.play();
    return;
  }

  const dossiers = [
    "",
    "SPOILER/pages/",
  ];

  let trouve = false;

  for (const dossier of dossiers) {
    try {
      const chemin = dossier + file;

      const res = await fetch(chemin, {
        method: "HEAD"
      });

      if (res.ok) {
        window.location.href = chemin;
        trouve = true;
        break;
      }

    } catch {}
  }

  if (!trouve) {
    audio.currentTime = 0;
    audio.play();
  }
});