//Business Logic for Bank Account
function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(total) {
  let UpdatedBalance = this.balance + total;
  this.balance = UpdatedBalance;
  console.log(typeof(UpdatedBalance));
}

BankAccount.prototype.withdraw = function(total) {
  let UpdatedBalance = this.balance - total;
  this.balance = UpdatedBalance;
  console.log(UpdatedBalance);
}

//User Interface Logic
let newAccount = new BankAccount ("", 0);

$(document).ready(function() {
  $("form#newAccount").submit(function(event) {
    event.preventDefault();
    newAccount.name = $("#name").val();
    newAccount.balance = parseInt($("#balance").val());
    console.log(newAccount);
    $("BankBalance").text(newAccount.balance)
});
  $("form#deposit").submit(function(event) {
    event.preventDefault();
    let sum = parseInt($("#add").val());
    newAccount.deposit(sum);
    console.log(newAccount);
    $("#BankBalance").text(newAccount.balance);
  });
$("form#withdrawal").submit(function(event) {
  event.preventDefault();
  let withdrawal = parseInt($("#subtract").val());
  newAccount.withdraw(withdrawal);
  console.log(newAccount);
  $("#BankBalance").text(newAccount.balance);
});
});
