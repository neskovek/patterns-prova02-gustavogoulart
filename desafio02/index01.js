class Message {
    constructor(text) {
        this.text = text;
    }

    getText() {
        return this.text;
    }
}

class MessageDecorator {
    constructor(message) {
        this.message = message;
    }

    getText() {
        return this.message.getText();
    }
}

class EmailMessage extends MessageDecorator {
    getText() { 
        const originalText = super.getText();
        return `Email: ${originalText}`;
    }
}

const msg = new EmailMessage(new Message("hoje o dia está horrível"));
console.log(msg.getText());