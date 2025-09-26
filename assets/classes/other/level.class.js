class Level {
    Jellys;
    Puffers;
    coins;
    poisons;
    backgroundObject;
    level_end_x = 700;
    FinalEnemy;

    constructor(Jellys, Puffers, coins, poisons, backgroundObject, FinalEnemy) {
        this.Jellys = Jellys;
        this.Puffers = Puffers;
        this.coins = coins;
        this.poisons = poisons;
        this.backgroundObject = backgroundObject;
        this.FinalEnemy = FinalEnemy;
    }
}