// Fonction permettant de creer des routes
import { Router } from "express";
import { ajouterpanier, panierParId, listpanier, modifierpanier, supprimerpanier} from "../controllers/panier.js";

const routepanier = Router()

//Les routes deviennent
.get('/:id',listpanier)


      .get('/:id', panierParId)
      .post('/', ajouterpanier)
      .put('/:id', modifierpanier)
      .delete('/:id', supprimerpanier)

export default routepanier 