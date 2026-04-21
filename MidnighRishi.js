// Simuler une transaction avec confidentialité

class PrivateTransaction {
  constructor(sender, receiver, amount) {
    this.sender = sender;
    this.receiver = receiver;
    this._amount = amount; // donnée privée
  }

  // Méthode publique (ce que le monde voit)
  getPublicView() {
    return {
      sender: this.sender,
      receiver: this.receiver,
      amount: "HIDDEN 🔒"
    };
  }

  // Méthode privée (accès sécurisé)
  verifyAccess(key) {
    if (key === "SECRET_KEY") {
      return {
        sender: this.sender,
        receiver: this.receiver,
        amount: this._amount
      };
    } else {
      return "Access denied ❌";
    }
  }
}

// Exemple d'utilisation
const tx = new PrivateTransaction("Olivier", "Alice", 500);

// Vue publique (blockchain publique)
console.log("PUBLIC VIEW:");
console.log(tx.getPublicView());

// Tentative sans permission
console.log("\nWITHOUT KEY:");
console.log(tx.verifyAccess("wrong_key"));

// Accès autorisé
console.log("\nWITH KEY:");
console.log(tx.verifyAccess("SECRET_KEY"));
