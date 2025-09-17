class FinalFish extends MovableObject{

    height = 500;
    width = 500;
    IMAGES_SWIMMING = [
        'assets/images/Enemies/Final-Enemy/2.floating/1.png',
        'assets/images/Enemies/Final-Enemy/2.floating/2.png',
        'assets/images/Enemies/Final-Enemy/2.floating/3.png',
        'assets/images/Enemies/Final-Enemy/2.floating/4.png',
        'assets/images/Enemies/Final-Enemy/2.floating/5.png',
        'assets/images/Enemies/Final-Enemy/2.floating/6.png',
        'assets/images/Enemies/Final-Enemy/2.floating/7.png',
        'assets/images/Enemies/Final-Enemy/2.floating/8.png',
        'assets/images/Enemies/Final-Enemy/2.floating/9.png',
        'assets/images/Enemies/Final-Enemy/2.floating/10.png',
        'assets/images/Enemies/Final-Enemy/2.floating/11.png',
        'assets/images/Enemies/Final-Enemy/2.floating/12.png',
        'assets/images/Enemies/Final-Enemy/2.floating/13.png',
    ];

    constructor() {
        super().loadImage('assets/images/Enemies/Final-Enemy/2.floating/1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = 400;
        this.y = 0;

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIMMING.length;
            let path = this.IMAGES_SWIMMING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 140)
    }

}