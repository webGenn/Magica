let score = 0;
let check = true;

window.onkeydown = function(e){
    if(e.keyCode == 32){
        let hero = document.querySelector(".hero");
        hero.classList.add("jumpHero");
        setTimeout(()=>{
            hero.classList.remove("jumpHero")
        },1200)
    }
    if(e.keyCode == 87){
        let water = document.querySelector(".heroWeaponWater");
        water.classList.add("attackWater");
        setTimeout(()=>{
            water.classList.remove("attackWater")
        },3000)
    }
    if(e.keyCode == 39){
        let hero = document.querySelector(".hero");
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
        hero.style.left = heroX + 100 + "px"
    }
    if(e.keyCode == 37){
        let hero = document.querySelector(".hero");
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
        hero.style.left = (heroX - 100) + "px"
    }
}

setInterval(()=>{

    let hero = document.querySelector(".hero");
    let obstacle = document.querySelector(".obstacle");
    let waterWeapon = document.querySelector(".heroWeaponWater");

    let Hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
    let Hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue("top"));

    let WwX = parseInt(window.getComputedStyle(waterWeapon, null).getPropertyValue("left"));
    let WwY = parseInt(window.getComputedStyle(waterWeapon, null).getPropertyValue("top"));

    let Ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    let Oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    let HeroXDistance = Math.abs(Hx-Ox);
    let HeroYDistance = Math.abs(Hy-Oy);

    let WFCollisionX = Math.abs(WwX-Ox)
    let WFCollisionY = Math.abs(WwY-Oy)

    if(HeroXDistance <= 150 && HeroYDistance < 130){
        alert(`Game Over, Your Score is : ${score-5}`);
        window.location.reload()
    }
    if(WFCollisionX <= 50 && WFCollisionY <= 20){
        let Water = document.querySelector(".heroWeaponWater");
        let fire = document.querySelector(".obstacle");
        let music = new Audio("bomb.mp3");
        music.play()
        Water.classList.remove("attackWater");
        fire.classList.remove("runObst");
        setTimeout(()=>{
            fire.classList.add("runObst");
        },100)
    }
    else if(check){
        scoreUpdate(score)
        score +=5
        check = false;
        setTimeout(()=>{
            check = true;
        },2950)
    }

},100)

function scoreUpdate(score){
    let scoreBoard = document.getElementById("score");
    scoreBoard.innerHTML = score
}