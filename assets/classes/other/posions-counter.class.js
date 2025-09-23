class PosionsCounter extends DrawableObject {

    IMAGES_POTION = [
        'assets/images/4.Marcadores/Purple/0_.png',
        'assets/images/4.Marcadores/Purple/20_.png',
        'assets/images/4.Marcadores/Purple/40_.png',
        'assets/images/4.Marcadores/Purple/60_.png',
        'assets/images/4.Marcadores/Purple/80_.png',
        'assets/images/4.Marcadores/Purple/100_.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_POTION)
        this.x = 10;
        this.y = 80;
        this.width = 170;
        this.height = 55;
        this.setPotions(0);
    }

    setPotions(posion) {
        this.posion = posion;
        let num = Math.floor(this.posion / 10);
        console.log(num);
        let path = this.IMAGES_POTION[num];
        this.img = this.imageCache[path];
    }
}