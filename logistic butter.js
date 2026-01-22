// Exemple simple de chaîne d'approvisionnement en JavaScript

// Définition des produits en stock
let stock = {
  "beurre_d_arachide": 50,
  "jus_fruits": 30,
  "cacao": 20
};

// Fonction pour afficher l'état du stock
function afficherStock() {
  console.log("=== État du stock ===");
  for (let produit in stock) {
    console.log(`${produit}: ${stock[produit]} unités`);
  }
  console.log("====================\n");
}

// Fonction pour passer une commande
function passerCommande(produit, quantite) {
  console.log(`Commande reçue: ${quantite} unités de ${produit}`);
  
  if (!stock[produit]) {
    console.log(`❌ Produit ${produit} non disponible.\n`);
    return;
  }
  
  if (stock[produit] >= quantite) {
    stock[produit] -= quantite;
    console.log(`✅ Commande validée. Livraison en cours...\n`);
  } else {
    console.log(`⚠️ Stock insuffisant pour ${produit}. Commande partielle possible: ${stock[produit]} unités\n`);
    stock[produit] = 0;
  }
}

// Fonction pour réapprovisionner le stock
function reapprovisionner(produit, quantite) {
  if (!stock[produit]) {
    stock[produit] = 0;
  }
  stock[produit] += quantite;
  console.log(`🔄 Réapprovisionnement: ${quantite} unités de ${produit} ajoutées.\n`);
}

// Simulation
afficherStock();
passerCommande("beurre_d_arachide", 20);
passerCommande("jus_fruits", 40);
reapprovisionner("jus_fruits", 50);
afficherStock();
