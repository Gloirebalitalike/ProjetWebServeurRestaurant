// Fonction pour creer une route

import { Router } from "express";
import { ajouterproduit,produitParId,listproduit,modifierproduit,supprimerproduit} from "../controllers/produit.js";

const routeproduit = Router()

// les routes

.get('/id',listproduit)

.get('/:id', produitParId)
.post('/:id', ajouterproduit)
.put('/: id', modifierproduit)
.delete('/:id' ,supprimerproduit)

export default routeproduit
