Constructors:
History = Array of arrays
Balance

Function:

Deposit = + Balance - [Date today, amount, null, balance] -  push history

Date = Date today

Withdraw = - Balance - [Date today, null, amount, balance] - push history

Print = 
console.log 
date             || credit || debit || balance //
History


deposit(1000) = 15/06/2020, 1000, null, 1000
deposit(2000) = 15/06/2020, 2000, null, 3000
withdrawal(500) = 15/06/2020, null, 500, 2500

History = [

[ 15/06/2020, null, 500, 2500 ]
[ 15/06/2020, 2000, null, 3000 ]
[ 15/06/2020, 1000, null, 1000 ]

]

Print = 
date || credit || debit || balance
15/06/2020, null, 500, 2500
15/06/2020, 2000, null, 3000
15/06/2020, 1000, null, 1000