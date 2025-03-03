class Account {
  constructor(owner, currency, pin, balance) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.balance = balance;
    this.movements = [];
  }
  deposit(amount) {
    this.amount = amount;
  }
  withdraw(amount) {
    if (amount > this.currency) {
      console.log("You have not enough money");
    } else {
      this.currency -= amount;
    }
  }
}
const account = new Account("Temurbek", "USD", 1111, 1000);
console.log(account);
account.deposit(100)
account.withdraw(200)

account.movements.forEach((nav)=>{
    console.log(nav);
})
