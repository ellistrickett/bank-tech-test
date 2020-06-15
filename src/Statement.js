'use strict';

class Statement{
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  getBalance() {
    return this.balance;
  }

  getDate() {
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    return (date + "/" + month + "/" + year);
  }

  getHistory() {
    return this.history
  }

  deposit(amount) {
    this.balance += amount
    this.history.unshift([this.getDate(), amount, null, this.balance])
  }

  withdrawal(amount) {
    this.balance -= amount
    this.history.unshift([this.getDate(), null, amount, this.balance])
  }

  print() {
    var str = this.history.join('\n');
    return '\nDate || Credit || Debit || Balance\n' + str.replace(/,/g, " || ")
  }

};