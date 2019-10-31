
let colors = ["#00FF00", "#FF00FF", "#00FF00"];
let frases = ["I Love You", "Te Amo", "Je T'aime", "Ek het jou lief", "Ti Amo", "Ich liebe dich", "S 'agapó", "我爱你", "愛してる", "사랑해", "Mahal kita", "Rakastan sinua"];

//let rand = Math.floor(Math.random() * 2)

//let color = colors[rand];

/*let heart = document.getElementById("heart");
heart.style.color = color;*/

posY = 600;

//posX = Math.floor(Math.random() * 700 ) + 300;

//heart.style.left = posX + "px";

/*let newHeart = document.createElement("i");
newHeart.className += " " + "fas";
newHeart.className += " " + "fa-circle";
newHeart.className += " " + "heart";

document.body.appendChild(newHeart);*/

let div = document.getElementById("heart-div");

let hearts = [];
let j = 600;
let i = 0;
let opa = 0.01;

function instanciar(){
    let instantiateHeart = setInterval(() => {
        let rand = Math.floor(Math.random() * 3)    
        let color = colors[rand];
        posX = Math.floor(Math.random() * 700 ) + 300;
        let heart = new Heart(posX, posY, 100, color);
        let newHeart = heart.instanciar();
        div.appendChild(newHeart);
        //heart.style.top = heart.posY + "px";
        //heart.style.left = heart.posX + "px";
        hearts.push(heart);
        
        document.body.appendChild(div);
        //console.log("Instanciando: " + hearts.length);
        heartAnimation(newHeart, j, opa);
        
}, 700);
}

function heartAnimation(newHeart, j, opa){
    let frames = setInterval(() => {
        if(j == 0){
            clearInterval(frames);
            console.log(posY);
            
            if(div.childNodes[0].nodeName != "DIV"){
                div.removeChild(div.childNodes[0]);
                console.log(div.childNodes[0].nodeName);
            }
            
            
        }
        else{
            j--;
            opa += 0.002;
            
            newHeart.style.top = j + "px";
            newHeart.style.opacity = 1 - opa;
            //hearts[0].style.top = posY + "px";
            /*heart.style.top = posY + "px";
            newHeart.style.top = posY + "px";
            console.log("sdasds");*/
            //heart[i].move = posY + "px";
        }
    }, 5);
}

let title = document.getElementById("title");
let tituloID = 0;
title.innerHTML = frases[tituloID];
let opacityCont = 0.01;

function titleAnimation(){
    let frames = setInterval(() => {
        opacityCont += 0.05;
        title.style.opacity = 1 - opacityCont;

        if(title.style.opacity <= 0){
            title.style.opacity = 1;
            opacityCont = 0.01;
            tituloID++;
            console.log("ENTRANDO");
            if(tituloID > frases.length - 1){
                tituloID = 0;
            }
            title.innerHTML = frases[tituloID];
        }
    }, 100);
}

titleAnimation();
instanciar();
//console.log(hearts.length);