class Account {
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.balance = 1000;
    }
    deposit(amount){
        this.amount = amount;
    }
    withdraw(amount){
        if (amount>this.currency){
            console.log("You have not enough money");
        } else {
            this.currency -= amount;
        }
    }
}
const account = new Account('John', 'USD', 1111)
console.log(account);
