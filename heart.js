class Heart {
    constructor(x, y, size, color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    instanciar(){
        let newHeart = document.createElement("i");
        newHeart.className += " " + "fa";
        newHeart.className += " " + "fa-heart";
        newHeart.className += " " + "heart"
        newHeart.style.top = this.y + "px";
        newHeart.style.left = this.x + "px";
        newHeart.style.color = this.color;
        console.log("Instanciando: " + this.x);

        return newHeart;
    }
}