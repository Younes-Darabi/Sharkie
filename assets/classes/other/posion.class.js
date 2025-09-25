class Poison extends MovableObject {
    height = 80;
    width = 55;
    IMAGES_POISON = [
        'assets/images/4.Marcadores/Posión/Animada/1.png',
        'assets/images/4.Marcadores/Posión/Animada/2.png',
        'assets/images/4.Marcadores/Posión/Animada/3.png',
        'assets/images/4.Marcadores/Posión/Animada/4.png',
        'assets/images/4.Marcadores/Posión/Animada/5.png',
        'assets/images/4.Marcadores/Posión/Animada/6.png',
        'assets/images/4.Marcadores/Posión/Animada/7.png',
        'assets/images/4.Marcadores/Posión/Animada/8.png',

    ];

    constructor(x,y) {
        super().loadImage('assets/images/4.Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_POISON);

        this.x = x;
        this.y = y;

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_POISON.length;
            let path = this.IMAGES_POISON[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 170)
    }

}