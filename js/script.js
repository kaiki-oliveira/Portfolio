const header = document.querySelector( "header");
window.addEventListener("scroll" , function(){
  header.classList.toggle("sticky", window.scrollY > 0)

})


let menu = document.querySelector('#navbar-icon'); 
let navlist = document.querySelector('.navbar-header');

menu.onclick = () => {
  menu.classList.toggle('bx-x'); 
  navlist.classList.toggle('active');
}


const sr = ScrollReveal({

  distance: '50px', 
  duration: 2500, 
  reset: true
    
})
    
sr.reveal('.home-text', {delay: 350, origin: 'left'})

//mudança de cor
function carregar() {
  var agora = new Date()
  var hora = agora.getHours()
  

  if(hora <= 4 || hora >= 18){
    window.document.body.style.background = '#00103f'
    window.document.body.style.color = '#D3D3D3'

  }
  
}

function abrirHtml(){
  window.open('https://developer.mozilla.org/en-US/docs/Web/HTML')
}
function abrirCss(){
  window.open('https://developer.mozilla.org/en-US/docs/Web/CSS')
}
function abrirJavaScript(){
  window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
}
