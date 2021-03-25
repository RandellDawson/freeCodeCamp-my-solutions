/*
Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[ ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100] ]

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function checkCashRegister(price, cash, cid) {
  var insufficient = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  };
  var giveback = [];
  var change = cash - price;
  var denomName = ["ONE HUNDRED","TWENTY","TEN","FIVE","ONE","QUARTER",
  "DIME", "NICKEL","PENNY"];
  var denomAmt = [100,20,10,5,1,0.25,0.10,0.05,0.01];

  var register = {};
  // build register from cid array
  var totaldrawer = 0;
  for (var i = 0;i<cid.length;i++) {
    register[cid[i][0]]=cid[i][1];
    totaldrawer += cid[i][1];
  }
  if (totaldrawer < change) {
    return insufficient;
  }
  else if (totaldrawer === change) {
    return {
      status: "CLOSED",
      change: cid
    };
  }

  i = 0;
  var tempAmount;
  while (change > 0 && i < denomAmt.length) {
    if (change-denomAmt[i] > 0 && register[denomName[i]]- denomAmt[i] > 0) {
      tempAmount = 0;
      while (change-denomAmt[i]>= 0 && register[denomName[i]]- denomAmt[i] >= 0) {
        tempAmount += denomAmt[i];
        change = (change - denomAmt[i]).toFixed(2);
        register[denomName[i]] = register[denomName[i]] - denomAmt[i];
      }
      giveback.push([denomName[i],tempAmount]);
    }
    else {
      i +=1;
    }
  }
  if (giveback.length < 1) {return insufficient}
  return {
    status: "OPEN",
    change: giveback
  };
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00],
 ["ONE HUNDRED", 100.00]]);
