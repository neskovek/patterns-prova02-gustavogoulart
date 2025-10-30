class LegacyPaymentSystem {
    makePayment(amount) {
        console.log(`Pagando R$${amount} com sistema legado.`);
    }
}

class ModernPaymentAPI {
    process(amountInCents) {
        console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
    }
}

class ModernPaymentAdapter {
    constructor(modernAPI) {
        this.modernAPI = modernAPI;
    }

    makePayment(amount) {
        const amountInCents = amount * 100;
        this.modernAPI.process(amountInCents);
    }
}

class PaymentProcessor {
    constructor(system) {
        this.system = system;
    }

    pay(amount) {
        this.system.makePayment(amount);
    }
}

console.log("Legado =");
const legacy = new LegacyPaymentSystem();
const processor1 = new PaymentProcessor(legacy);
processor1.pay(100);

console.log("Adapter =");
const modernAPI = new ModernPaymentAPI();
const adapter = new ModernPaymentAdapter(modernAPI);
const processor2 = new PaymentProcessor(adapter);
processor2.pay(100);