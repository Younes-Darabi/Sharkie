class Animada extends MovableObject {
    height = 80;
    width = 55;
    IMAGES_ANIMADA = [
        'assets/images/4.Marcadores/Posión/Animada/1.png',
        'assets/images/4.Marcadores/Posión/Animada/2.png',
        'assets/images/4.Marcadores/Posión/Animada/3.png',
        'assets/images/4.Marcadores/Posión/Animada/4.png',
        'assets/images/4.Marcadores/Posión/Animada/5.png',
        'assets/images/4.Marcadores/Posión/Animada/6.png',
        'assets/images/4.Marcadores/Posión/Animada/7.png',
        'assets/images/4.Marcadores/Posión/Animada/8.png',

    ];

    constructor() {
        super().loadImage('assets/images/4.Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_ANIMADA);

        this.x = 200;
        this.y = 100;

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_ANIMADA.length;
            let path = this.IMAGES_ANIMADA[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 170)
    }

}