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
};