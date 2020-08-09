//Class 4 : Banking - Reading UML & Implementation
class Bank{
	constructor(){
		this.code;
		this.address;
		this.atm;
		this.accounts;
		this.customers;
	}
	manages = function(){}
	maintains = function(){}
}

class Customer{
	constructor(){
		this.name;
		this.address;
		this.dob;
		this.cardnumber;
		this.pin;
		this.atm; // ATM array object type storing the ATM details of all the customer transactions
	}
	verifyPassword = function(){}
}

class ATM{
	constructor(){
		this.loc;
		this.managedby;
	}
	identifies = function(){}
	transactions = function(){}
}

class Account{
	constructor(){
		this.number;
		this.balance;
	}
	deposit = function(){}
	withdraw = function(){}
	createTransaction = function(){}
}

class CurrentAccount extends Account{
	constructor(){
		super();
		this.savacc;
	}
	withdraw = function(){}// an have a different implementaiton from the parent class
}

class SavingsAccount extends Account{
	constructor(){
		super();
		this.curacc;
	}
}