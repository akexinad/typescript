"use strict";
// TYPE DEFINITIONS
// VARIABLE DECLARATIONS
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Fellini",
    bankAccount: bankAccount,
    hobbies: ["Film", "Watchmaking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
