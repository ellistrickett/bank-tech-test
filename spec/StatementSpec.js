'use strict';

describe('Statement', function() {

  var statement;

  beforeEach(function() {
    statement = new Statement();
  });

  it('startes with a balance of 0', function() {
    expect(statement.getBalance()).toEqual(0)
  });

  it('increases balance with deposit()', function(){
    statement.deposit(1000);
    expect(statement.getBalance()).toEqual(1000)
  });

  it('decreases balance with withdrawal()', function(){
    statement.deposit(1000);
    statement.deposit(2000);
    statement.withdrawal(500);
    expect(statement.getBalance()).toEqual(2500)
  });
});