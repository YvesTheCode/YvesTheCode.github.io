let goprojet = document.getElementById('vers-projet')

let gorecent = document.getElementById('projet-recent')

let gonouveau = document.getElementById('derniere-ajout')


goprojet.addEventListener('click', function() {

    window.location.assign('projets.html')

})

// goprojet.addEventListener('mouseenter',function(){
//     textbox.textContent = "pet"
// })


gorecent.addEventListener('click', function() {
    sessionStorage.removeItem("memory");

    sessionStorage.setItem("memory",14)
    window.location.assign("projets-flex.html");
})

gonouveau.addEventListener('click', function() {
    sessionStorage.removeItem("memory");

    sessionStorage.setItem("memory",15)
    window.location.assign("projets-flex.html");
})

