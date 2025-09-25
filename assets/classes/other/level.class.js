class Level {
    Jellys;
    Puffers;
    coins;
    poisons;
    backgroundObject;
    level_end_x = 700;

    constructor(Jellys, Puffers, coins, poisons, backgroundObject) {
        this.Jellys = Jellys;
        this.Puffers = Puffers;
        this.coins = coins;
        this.poisons = poisons;
        this.backgroundObject = backgroundObject;
    }
}