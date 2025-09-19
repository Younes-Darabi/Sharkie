class Bankkonto {
    besitzer;
    kontostand;
    zinsen = 0.02;

    constructor(kontoBesitzer, meinKontostand) {
        this.besitzer = kontoBesitzer;
        this.kontostand = meinKontostand;
    }

    abheben(betrag) {
        console.log("vor abheben:", this.kontostand);
        this.kontostand -= betrag;
        console.log("nach abheben:", this.kontostand);
    }

    einzahlen(betrag) {
        console.log("vor einzahlen:", this.kontostand);
        this.kontostand += betrag;
        console.log("nach einzahlen:", this.kontostand);
    }

    erhalteZinsen() {
        console.log("vor zinsen:", this.kontostand);
        this.kontostand += this.kontostand * this.zinsen;
        console.log("nach zinsen:", this.kontostand);
    }

    infoKontostand() {
        console.log("info kontostand:", this.kontostand);
        console.log("info besitzer:", this.besitzer);
        console.log("info zinsen:", this.zinsen);
    }
}

class Girokonto extends Bankkonto {

    constructor(besitzer, kontostand) {
        super(besitzer, kontostand);
    }

    transaktion(empfaengerkonto, betrag) {
        this.abheben(betrag);
        empfaengerkonto.einzahlen(betrag);
    }

    dauerauftrag() {
        setInterval(() => {
            this.kontostand -= 1;
            console.log(this.kontostand);
        }, 1000);
    }

}

class Sparkonto extends Bankkonto {
    zinsen = 0.05;

    constructor(besitzer, kontostand) {
        super(besitzer, kontostand);
        this.zinsen = 0.05;
    }

}

let myGirokonto = new Girokonto("Younes", 1000);
let mySparkonto = new Sparkonto("Younes",2000);

// console.log("neues konto1:", konto1);
// console.log("neues konto kontostand:", konto1.kontostand);
// konto1.abheben(100)
// konto1.einzahlen(300)
// konto1.erhalteZinsen();
// konto1.infoKontostand();




