// Importer tous les models
import Utilisateur from "./Utilisateur.js";
import Role from "./Role.js";
import Commande from "./Commande.js";
import Commentaire from "./Commentaire.js";
import Panier from "./Panier.js";
import Produit from "./Produit.js";

// Appliquer les relations (associations)
Utilisateur.hasMany(Role)
Role.belongsTo(Utilisateur)
Role.hasMany(Utilisateur)
Utilisateur.belongsTo(Role)
// RELATION UTILISATEUR commande
Utilisateur.hasMany(Commande)
Commande.belongsTo(Utilisateur)
// relation commande produit
Commande.hasMany(Produit)
Produit.belongsTo(Commande)

// relation commentaire utilisateur

Utilisateur.hasOne(Commentaire)
Commentaire.belongsTo(Utilisateur)

// relation entre la table commande et panier


Commande.hasOne(Panier)
Panier.belongsTo(Commande)


export { Utilisateur, Role, Panier, Commande, Commentaire,  Produit}