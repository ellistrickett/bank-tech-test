'use strict';

class Statement{
  constructor() {
    this.balance = 0
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount
  }

  withdrawal(amount) {
    this.balance -= amount
  }

  getDate() {
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    return (date + "/" + month + "/" + year);
  }

};