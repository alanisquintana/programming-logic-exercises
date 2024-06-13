/* 
You are a financial advisor who helps people manage their finances. Create a program that asks for the bank balance and the purchase price. Check if there is enough balance, deduct the purchase price from the balance, and display a message with the result of the purchase, including the current balance.
*/
const userBalance = Number(prompt("What is your bank balance?"))
const purchaseValue = Number(prompt("What is the purchase value?"))

if (userBalance < purchaseValue) {
    console.log('PURCHASE DENIED!');
    console.log("There is not enough balance.")
} else {
    const currentBalance = balanceUpdater(userBalance, purchaseValue).toLocaleString('en-US', {style:'currency', currency:'USD'})

    console.log('PURCHASE APPROVED!');
    console.log(`Your current balance is ${currentBalance}.`);
}

function balanceUpdater(bankBalance, purchaseValue) {
    return bankBalance - purchaseValue
}