class FinalFish extends MovableObject {

    height = 500;
    width = 500;

    IMAGES_INTRODUCE = [
        'assets/images/Enemies/Final-Enemy/1.Introduce/1.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/2.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/3.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/4.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/5.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/6.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/7.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/8.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/9.png',
        'assets/images/Enemies/Final-Enemy/1.Introduce/10.png',
    ];

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

        super().loadImage('assets/images/Enemies/Final-Enemy/1.Introduce/1.png');
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = 4200;
        this.y = 0;

        this.animate();
    }

    animate() {

        this.IMAGES_INTRODUCE.forEach((path, index) => {
            setTimeout(() => {
                this.img = this.imageCache[path];
            }, 140 * index);
        });

        setTimeout(() => {
            setInterval(() => {
                this.playAnimation(this.IMAGES_SWIMMING);
            }, 140)
        }, 1100);

    }

}