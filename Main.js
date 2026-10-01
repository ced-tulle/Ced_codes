function formatMoney(amount) {
  return "PHP " + amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
 
class Account {
  #balance; 
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }
 
  getType() {
    return "Account";
  }
 
  getBalance() {
    return this.#balance;
  }
 
  _setBalance(value) {
    this.#balance = value;
  }
 
  deposit(amount) {
    this.#balance += amount;
    console.log(`${this.owner} deposited ${formatMoney(amount)}. ` +
      `New balance: ${formatMoney(this.#balance)}`);
  }
 
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`${this.owner} failed to withdraw ${formatMoney(amount)}. ` +
        `Insufficient funds.`);
    } else {
      this.#balance -= amount;
      console.log(`${this.owner} withdrew ${formatMoney(amount)}. ` +
        `New balance: ${formatMoney(this.#balance)}`);
    }
  }
 
  applyMonthEnd() {}
 
  printSummary() {
    console.log(`${this.owner} (${this.getType()}): ${formatMoney(this.#balance)}`);
  }
}
 
class SavingsAccount extends Account {
  getType() {
    return "Savings";
  }
 
  applyMonthEnd() {
    const interest = this.getBalance() * 0.02;
    this._setBalance(this.getBalance() + interest);
    console.log(`${this.owner} earned interest of ${formatMoney(interest)}. ` +
      `New balance: ${formatMoney(this.getBalance())}`);
  }
}
 
class CheckingAccount extends Account {
  getType() {
    return "Checking";
  }
 
  applyMonthEnd() {
    const fee = 100;
    this._setBalance(this.getBalance() - fee);
    console.log(`${this.owner} was charged a monthly fee of ${formatMoney(fee)}. ` +
      `New balance: ${formatMoney(this.getBalance())}`);
  }
}
 
console.log("=== BANK ACCOUNT SIMULATION ===");
 
const juan = new SavingsAccount("Juan", 5000);
const maria = new CheckingAccount("Maria", 3000);
console.log(`Created Savings account for Juan: ${formatMoney(juan.getBalance())}`);
console.log(`Created Checking account for Maria: ${formatMoney(maria.getBalance())}`);
 
console.log("");
console.log("--- Transactions ---");
juan.deposit(1000);
juan.withdraw(500);
maria.withdraw(4000);
maria.withdraw(1200);
 
console.log("");
console.log("--- Month End ---");
juan.applyMonthEnd();
maria.applyMonthEnd();
 
console.log("");
console.log("--- Final Summary ---");
juan.printSummary();
maria.printSummary();

