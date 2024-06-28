// Recupere le canvas dans le dom
const canvas= document.getElementById('canvas');

// Recupere le contexte du canvas
let ctx = canvas.getContext('2d');

// responsif

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

window.addEventListener('resize',()=>{
    canvas.width= window.innerWidth;
    canvas.height= window.innerHeight;
    init();

})

// animation sur x
var x =200;
// vitesse d'animation
var v=5;


function init(){
    requestAnimationFrame(init);
    // permet d'afficher les images imprimées
    ctx.clearRect(0,0,innerWidth,innerHeight);

    // formes
    ctx.beginPath();
    ctx.arc(x,100,30,0,Math.PI*2);
    ctx.fill()

    // creer un mvt
    if(x+60> innerWidth || x-60<0){
        v=-v;
    }
    x+=v;
}

init();