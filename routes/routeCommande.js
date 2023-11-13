// fonction permettant de creer des routes

import { Router } from "express";
import { ajouterCommande,commandeParId,listCommande,supprimerCommande,modifierCommande } from "../controllers/commande.js";


const routeCommande = Router()

// les routes
.get('/', listCommande)

.get('/:id', commandeParId)
.post('/', ajouterCommande)
.put('/:id', modifierCommande)
.delete('/:id', supprimerCommande)
