score = 0;
cross = true;
let music = new Audio("assets/music1.mp3");
let gameturn = new Audio("assets/ting.mp3");
let gameover = new Audio("assets/gameover.mp3");

document.body.addEventListener("mouseover", function () {
    console.log("Shraddha");
    music.play()
})

// audio();

document.onkeydown = function(e){
    console.log("key is:", e.keyCode);
    // music.play();

    if(e.keyCode == 38){
        cinderalla = document.querySelector('.cinderlla1');
       cinderalla.classList.add('animateCin');
       setTimeout(() => {
        cinderalla.classList.remove('animateCin');
       }, 700); 
    }

    if(e.keyCode == 39){
        cinderalla = document.querySelector('.cinderlla1');
        cinderallaX = parseInt(window.getComputedStyle(cinderalla, null).getPropertyValue('left'));
        cinderalla.style.left = cinderallaX + 112 + 'px';
    }

    if(e.keyCode == 37){
        cinderalla = document.querySelector('.cinderlla1');
        cinderallaX = parseInt(window.getComputedStyle(cinderalla, null).getPropertyValue('left'));
       
        cinderalla.style.left = cinderallaX - 112 + 'px';

    }
 

};

setInterval(()=> {
    let cinderalla = document.querySelector('.cinderlla1');
    let gameOver = document.querySelector('.gameOver1');
    obstacle = document.querySelector('.obstacle1');

    dx = parseInt(window.getComputedStyle(cinderalla, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(cinderalla, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX, offsetY);
     
    if(offsetX < 93 && offsetY < 52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        cinderalla.classList.add('visibiltyClass');
        gameover.play();
        music.pause();
    }else if(offsetX < 145 && cross){
        score+=1;
        gameturn.play();
        updateScore(score);
        cross = false;
        setTimeout(() =>{
            cross=true;
        },1000);

        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur - 0.1 + 's';
        },500);

       
     
    }
                                      
},100);

function updateScore(score){
    scoreCount.innerHTML = "Your Score: " + score;
}