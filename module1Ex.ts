// TYPE DEFINITIONS

type bankAccountObject = {
    money: number,
    deposit: (all: number) => void
}

type personObject = {
    name: string,
    bankAccount: bankAccountObject,
    hobbies: string[]
}


// VARIABLE DECLARATIONS

let bankAccount: bankAccountObject = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
}

let myself: personObject = {
    name: "Fellini",
    bankAccount,
    hobbies: ["Film", "Watchmaking"]
}

myself.bankAccount.deposit(3000);

console.log(myself);
