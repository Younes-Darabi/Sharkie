class PufferOrange extends MovableObject{
    height = 70;
    width = 70;

    constructor(){
        super().loadImage('assets/images/Enemies/Puffer/Orange/1.Swim/2.swim1.png');
        this.x = 650;
        this.y = Math.random() * 380;
    }

}