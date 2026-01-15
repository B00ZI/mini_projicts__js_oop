class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return "deposit secces your new balanc is " + this.#balance;
  }
  withdraw(amount) {
    if (this.#balance - amount < 0) {
      return (
        "your balanc is less then the amout you traying to withdraw you balance is :" +
        this.#balance
      );
    } else {
      this.#balance -= amount;
      return (
        "amount withdraw is :  " +
        amount +
        "\n  new balance is  " +
        this.#balance
      );
    }
  }
  displayBalance() {
    return "your balanc is :  " + this.#balance;
  }
}

// const bank = new BankAccount()

// console.log(bank.withdraw(300))
// console.log(bank.deposit(400))
// console.log(bank.withdraw(100))
// console.log(bank.displayBalance())
