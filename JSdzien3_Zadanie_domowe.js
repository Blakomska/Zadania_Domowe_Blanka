//1. Zrób własny przykład dziedziczenia :)

class Pacjent {
    constructor(name, surname, age, sex, occupation) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.sex = sex;
        this.occupation = occupation;
    }
    introducePacjent() {
        console.log(`Pacjent ${this.name} ${this.surname}, lat ${this.age}, identyfikuje się jako ${this.sex}, 
            z zawodu ${this.occupation}`);
    }
}

const pacjent1 = new Pacjent("Dominika", "Kowalska", 39, "kobieta", "security tester");
pacjent1.introducePacjent();


class Illness extends Pacjent {
    constructor(name, surname, age, sex, occupation, disease, validFrom) {
        super(name, surname, age, sex, occupation);
        this.disease = disease;
        this.validFrom = validFrom;
    }
    sufferFrom() {
        console.log(`${this.validFrom} lat temu zdiagnozowano u pacjenta ${this.disease}.`);
    };
};

const illness1 = new Illness("Mściwój", "Staropolski", 42, "mężczyzna", "programista", "uogólniony ból istnienia", 5);
illness1.introducePacjent();
illness1.sufferFrom();

//Działa, ale tutaj się zamotałam, bo mam wrażenie, że można byłoby to zrobić prościej, a nie przez obsługę błędu

async function Action() {
    return new Promise((notNeed, need) => {
            const treatment = Math.random() > 0.5;

            if (treatment) {
                notNeed("Pacjent nie wymaga hospitalizacji");
            } else {
                need("Pacjent wymaga natychmiastowej hospitalizacji");
            };

        });           
};

try {
    const action1 = await Action(); 
    console.log("Zalecenia: " + action1);
} catch (action2) {
    console.log("Uwaga:", action2); //obsługa błędu
} 


