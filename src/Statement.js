'use strict';

class Statement{
  
  constructor(dateToday = new DateToday()) {
    this.date = dateToday;
    this.balance = 0;
    this.history = [];
  }

  getBalance() {
    return this.balance;
  }

  getHistory() {
    return this.history
  }

  deposit(amount) {
    this.balance += amount
    this.history.unshift([this.date.dateFormatter(), amount, null, this.balance])
  }

  withdrawal(amount) {
    this.balance -= amount
    this.history.unshift([this.date.dateFormatter(), null, amount, this.balance])
  }

  print() {
    var str = this.history.join('\n');
    return '\nDate || Credit || Debit || Balance\n' + str.replace(/,/g, " || ")
  }

};