class Level {
    Jellys;
    Puffers;
    coins;
    posions;
    backgroundObject;
    level_end_x = 700;

    constructor(Jellys, Puffers, coins, posions, backgroundObject) {
        this.Jellys = Jellys;
        this.Puffers = Puffers;
        this.coins = coins;
        this.posions = posions;
        this.backgroundObject = backgroundObject;
    }
}