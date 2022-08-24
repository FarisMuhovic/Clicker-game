var wallet = 0;
var clickdmg = 1;
var costofupgrade = 10;
var level = 0;
document.getElementById("wallet").innerHTML = wallet;
function clickmebtn() {
  wallet += clickdmg;
  document.getElementById("wallet").innerHTML = wallet;
  document.getElementById("getanimation").innerHTML = "+ " + clickdmg;
}
document.getElementById("cost").innerHTML = costofupgrade;
document.getElementById("mpc").innerHTML = clickdmg;
function upgrade() {
  if (wallet >= costofupgrade) {
    wallet -= costofupgrade;
    costofupgrade += 16;
    clickdmg += 2;
    level += 1;
    document.getElementById("cost").innerHTML = costofupgrade;
    document.getElementById("wallet").innerHTML = wallet;
    document.getElementById("mpc").innerHTML = clickdmg;
    document.getElementById("clicklvl").innerHTML = level;
  }
}
var monkeyunlocked = false;
function monkey() {
  if (wallet >= 1500) {
    wallet -= 1500;
    monkeyunlocked = true;
    document.getElementById("wallet").innerHTML = wallet;
    document.getElementById("monkeypriceunlock").innerHTML = "UNLOCKED";
    document.getElementById("monke").onclick = null;
    setInterval(monkeywork, 1000);
  }
}
var monkeyprofit = 125;
var bananaprice = 100;
function monkeywork() {
  wallet += monkeyprofit;
  document.getElementById("wallet").innerHTML = wallet;
}
var bananalvl = 0;
document.getElementById("costofbanana").innerHTML = bananaprice;
function bananas() {
  if (wallet >= bananaprice && monkeyunlocked == true) {
    monkeyprofit += 15;
    wallet -= bananaprice;
    bananaprice += 30;
    bananalvl += 1;
    document.getElementById("wallet").innerHTML = wallet;
    document.getElementById("bananalvl").innerHTML = bananalvl;
    document.getElementById("costofbanana").innerHTML = bananaprice;
  }
}
