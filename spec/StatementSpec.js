'use strict';

describe('Statement', function() {

  var statement;

  beforeEach(function() {
    statement = new statement();
  });

  it('startes with a balance of 0', function() {
    expect(statement.balance).toEqual(0)
  });
});