/**
 * Represents an animated poison bottle object collectible by the player.
 * @extends MovableObject
 */
class Poison extends MovableObject {
    height = 80;
    width = 55;
    offset = { left: 10, top: 0, right: 10, bottom: 0, width: 30, height: 80 };

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

    /**
     * Creates a new poison bottle instance.
     * @param {number} x - The X position of the poison.
     * @param {number} y - The Y position of the poison.
     */
    constructor(x, y) {
        super().loadImage('assets/images/4.Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_POISON);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * Animates the poison bottle in a continuous loop.
     */
    animate() {
        setInterval(() => {
            if (World.gamePaused) return;
            let i = this.currentImage % this.IMAGES_POISON.length;
            let path = this.IMAGES_POISON[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 170);
    }
}
