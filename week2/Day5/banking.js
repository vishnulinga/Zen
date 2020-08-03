class Bank{
    constructor(code,address)
    {
        this.code=code
        this.address=address
    }
    manages()
    {return}
    maintains()
    {return}
}
class ATM{
    constructor(location,managedby)
    {
        this.location=location
        this.managedby=managedby
    }
    identifies()
    {return}
    transactions()
    {return}
}
class Customer{
    constructor(name,address,dob,cardnum,pin)
    {
        this.name=name
        this.address=address
        this.dob=dob
        this.cardnum=cardnum
        this.pin=pin
    }
    verifypassword(pwd)
    {return}
}
class Account{
    constructor(accountnum,balance)
    {
        this.accountNumber=accountNumber
        this.balance=balance
    }
    deposit(amt)
    {
        this.balance+=amt
    }
    withdraw(amt)
    {
        this.balance-=amt
    }
    createTransaction()
    {return}
}
class SavingsAccount extends Account{
    constructor(accountno,balance)
    {
        this.accountNo=accountNo
        this.balance=balance
    }
}
class CurrentAccount extends Account {
    constructor(accountno,balance)
    {
        this.accountNo=accountNo
        this.balance=balance
    }
    withdraw(amt)
    {this.balance-=amt}
}
class ATMtransactions{
    constructor(id,date,type,amt,postbalance)
    {
        this.transactionID=id
        this.date=new Date()
        this.type=type
        this.amount=amt
        this.postbalance=postbalance
    }
    modifies()
    {return}
}
