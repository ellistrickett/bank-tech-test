'use strict';

describe('Statement', function() {

  var statement;

  beforeEach(function() {
    statement = new Statement();
  });

  it('starts with a balance of 0', function() {
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

  it('knows what date it is', function(){
    expect(statement.getDate()).toEqual("15/6/2020")
  });

  it('saves each deposit as an array', function() {
    statement.deposit(1000);
    expect(statement.getHistory()).toContain(["15/6/2020", 1000, null, 1000])
  });

  it('saves each withdrawal as an array', function(){
    statement.deposit(1000);
    statement.withdrawal(500);
    expect(statement.getHistory()).toContain(["15/6/2020", null, 500, 500])
  });
});