/**
 * Overloading
 * Class yang menghubah parameter
 */

interface Mailable{
    sendConstructor(email: string): boolean;
    queueConstructor(email: string): boolean;
    laterConstructor(email: string, after: number): boolean;
}

interface FutureMailable {
    send(email: string): boolean;
    queue(email: string): boolean;
    later(email: string, after: number): boolean;
}

class MailConstructor implements Mailable {
    email: string;
    after: number;

    constructor(email: string, after: number) {
        this.email = email;
        this.after = after;
    }

    laterConstructor(): boolean {
        console.info(`${this.email} & ${this.after}`);
        return true;
    }
    sendConstructor(): boolean {
        console.info(`${this.email}`);
        return true;
    }
    queueConstructor(): boolean {
        console.info(`${this.email}`);
        return true;
    }

}

class Mail implements FutureMailable {
   
    later(email: string, after: number): boolean {
        console.info(`${email} & ${after}`);
        return true;
    }
    send(email: string): boolean {
        console.info(`${email}`);
        return true;
    }
    queue(email: string): boolean {
        console.info(`${email}`);
        return true;
    }
}

console.info(`\n`);
console.info(`------------withConstructor------------------`);
let emailBaruConstructor = new MailConstructor('shinobiConstructor@gmail.com', 11);
console.info(emailBaruConstructor.email);
console.info(`---------------------------------------------`);

console.info(`\n`);

console.info(`------------withoutConstructor------------------`);
let emailBaru = new Mail();
emailBaru.queue('shinobi@gmail.com');
emailBaru.later('shinobiProgrammer@gmail.com', 12);
emailBaru.send('programmershinobi@gmail.com');
console.info(`------------------------------------------------`);
console.info(`\n`);
