var mousePosition;
var div;
var estaClicado = false;
var larguraTela 
var alturaTela 

div = document.createElement("div");
div.className= "quadrado";
div.style= 'left:600px; top:400px;'
document.body.appendChild(div);

div.addEventListener('mousedown', function(e) {
    estaClicado = true;
}, true);

document.addEventListener('mouseup', function() {
    estaClicado = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (estaClicado) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        div.style.left = (mousePosition.x ) + 'px';
        div.style.top  = (mousePosition.y ) + 'px';
    }
}, true)

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    if (!div.style.left) {
        div.style.left= '0px'
    }
    let numeroLeft = Number(div.style.left.replace('px',''))
    if (!div.style.top) {
        div.style.top= '0px'
    }
    let numeroTop = Number(div.style.top.replace('px',''))

    // Pra esquerda
    if (event.keyCode === 37) {
      var novaPosicao = numeroLeft -20
        if(novaPosicao < 0){
            novaPosicao= 0
        }
        div.style.left = novaPosicao + 'px';
    }
    // Pra cima
    if (event.keyCode === 38) {
     var novaPosicao= numeroTop -20;
       if (novaPosicao < 0){
           novaPosicao= 0
       }
        div.style.top  = novaPosicao + 'px';
    }

    // Pra direita
    if (event.keyCode === 39) {
        var novaPosicao = numeroLeft +20
        if(novaPosicao > larguraTela-50){
            novaPosicao= larguraTela-50
        }
        div.style.left = novaPosicao + 'px';
    }
    // Pra baixo
    if (event.keyCode === 40){ 
        div.style.top  = numeroTop + 20 + 'px';
    }
});  
  window.addEventListener('resize',function(event){
  console.log(event.target)
  larguraTela= event.target.innerWidth
  alturaTela = event.target.innerHeight
  })