class StatusBar extends DrawableObject {

    IMAGES_ENERGY = [
        'assets/images/4.Marcadores/Purple/0_ .png',
        'assets/images/4.Marcadores/Purple/20__1.png',
        'assets/images/4.Marcadores/Purple/40_ .png',
        'assets/images/4.Marcadores/Purple/60_ .png',
        'assets/images/4.Marcadores/Purple/80_ .png',
        'assets/images/4.Marcadores/Purple/100_ .png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_ENERGY)
        this.x = 10;
        this.y = 0;
        this.width = 170;
        this.height = 55;
        this.setPercentage(50);
    }

    setPercentage(energy) {
        this.energy = energy;
        let num = Math.floor(this.energy / 10);
        console.log(num);
        let path = this.IMAGES_ENERGY[num];
        this.img = this.imageCache[path];
    }
}