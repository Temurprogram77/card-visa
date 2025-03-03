// // class Account {
// //   constructor(owner, currency, pin, balance) {
// //     this.owner = owner;
// //     this.currency = currency;
// //     this.pin = pin;
// //     this.balance = balance;
// //     this.movements = [];
// //   }
// //   deposit(amount) {
// //     this.amount = amount;
// //   }
// //   withdraw(amount) {
// //     if (amount > this.currency) {
// //       console.log("You have not enough money");
// //     } else {
// //       this.currency -= amount;
// //     }
// //   }
// // }
// // const account = new Account("Temurbek", "USD", 1111, 1000);
// // console.log(account);
// // account.deposit(100)
// // account.withdraw(200)

// // account.movements.forEach((nav)=>{
// //     console.log(nav);
// // })

// const Product = {
//   initt(name, price) {
//     this.name = name;
//     this.price = price;
//   },
//   getInfo() {
//     return `${this.name} narxi ${this.price}$`;
//   },
// };

// const ElectronicProduct = Object.create(Product);

// ElectronicProduct.initElectronic = function (name, price, brand) {
//   this.initt(name, price);
//   this.brand = brand;
// };

// ElectronicProduct.getWarranty = function () {
//   return `${this.name} brendi: ${this.brand}, 1 yil kafolat bilan`;
// };

// const phone = Object.create(ElectronicProduct);
// phone.initElectronic("iPhone 15", 12000000, "Apple");

// console.log(phone.getInfo());
// console.log(phone.getWarranty());

let data = [
    {
        name: "Temurbek",
        surname: "Narzullayev",
        image: "/assets/img/account.png",
        balance: 10000,
    },
]
let ball = document.querySelector('.ball');

