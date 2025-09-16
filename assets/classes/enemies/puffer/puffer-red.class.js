class PufferRed extends MovableObject{
    height = 70;
    width = 70;

    constructor(){
        super().loadImage('assets/images/Enemies/Puffer/Red/1.Swim/3.swim1.png');
        this.x = 1120;
        this.y = Math.random() * 580;
        this.animate(Math.random() * 3);
    }

    animate(speed) {
        setInterval(() => {
            this.x -= speed;
        }, 1000/60)
    }
    
}