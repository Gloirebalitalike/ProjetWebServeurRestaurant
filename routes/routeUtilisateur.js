// Fonction permettant de creer des routes
import { Router } from "express";
import { ajouterUtilisateur, utilisateurParId, listUtilisateur, modifierUtilisateur, supprimerUtilisateur} from "../controllers/utilisateur.js";
import { verifierToken } from "../auth/autorisation.js";

const routesUtilisateur = Router()

//Les routes deviennent

routesUtilisateur.get('/',verifierToken, listUtilisateur)
      .get('/:id', utilisateurParId)
      .post('/', ajouterUtilisateur)
      .put('/:id', modifierUtilisateur)
      .delete('/:id', supprimerUtilisateur)

export default routesUtilisateur