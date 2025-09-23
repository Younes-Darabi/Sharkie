class Level {
    enemies;
    coins;
    posions;
    backgroundObject;
    level_end_x = 700;

    coins;
    constructor(enemies, coins, posions, backgroundObject) {
        this.enemies = enemies;
        this.coins = coins;
        this.posions = posions;
        this.backgroundObject = backgroundObject;
    }
}