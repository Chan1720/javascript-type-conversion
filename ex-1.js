let accountBalance = 400;
let depositAmountFromUser = "10";

accountBalance = accountBalance + depositAmountFromUser;
console.log(accountBalance);

let accountBalanceMessage = "Your account balance is " + accountBalance;

console.log(accountBalanceMessage);

depositAmountFromUser = Number(depositAmountFromUser);
console.log(typeof depositAmountFromUser);

accountBalance = 400;
console.log(typeof accountBalance);

accountBalance = accountBalance + depositAmountFromUser;
accountBalanceMessage = "Your account balance is " + accountBalance;
console.log(accountBalanceMessage);

