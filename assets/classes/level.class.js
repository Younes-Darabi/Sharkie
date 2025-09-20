class Level {
    enemies;
    coins;
    animada;
    backgroundObject;
    level_end_x = 700;

    coins;
    constructor(enemies, coins, animada, backgroundObject) {
        this.enemies = enemies;
        this.coins = coins;
        this.animada = animada;
        this.backgroundObject = backgroundObject;
    }
}