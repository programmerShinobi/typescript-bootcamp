/**
 * Encapsulation
 *      ===> Class yang menggunakan access modifier (public, protected, private)
 * 
 *  -> public : dapat diakses dimanapun
 *  -> protected : dapat diakses hanya di class utama & class turunannya (parent & child)
 *  -> private : dapat diakses hanya di class utama (parent)
 * 
 * --------------------------------------------------------------    
 * --------------------------------------------------------------
 * 
 * Inheritance
 *      ===>  Teknik membuat object dimana attribute dan Method nya diambil dari parent class :
 *              
 *              • Class yang mewariskan disebut parent-class atau base class
 *              • Class yang mewarisi disebut child-class atau subclass
 *              • Child-Class dapat meng-access attribute dari parent class
 *              • Child-Class bisa memiliki attribute atau method yang beda dari parent-class
 *              • Child-class dapat override method yang dimiliki parent class
 * 
 */

class BankAccount {
    protected _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    public deposit(amount: number) {
        this._balance += amount;
    }

    public withdraw(amount: number) {
        if (this._balance >= amount) {
            this._balance -= amount;
        } else {
            console.info("Insufficient funds.");
        }
    }

    public get balance(): number{
        return this._balance;
    }

    public balances(): number{
        return this._balance;
    }
}

class ClientBankAccount extends BankAccount{
    constructor(codeBank: number) {
        super(codeBank);
    }

    public getBalance(): number{
        return this._balance
    }
}

let newBankAccount = new ClientBankAccount(1000);
console.info(newBankAccount.balance);
console.info(newBankAccount.balances());

newBankAccount.deposit(500);
console.info(newBankAccount.balance);
console.info(newBankAccount.balances());

newBankAccount.withdraw(600);
console.info(newBankAccount.balance);
console.info(newBankAccount.balances());
