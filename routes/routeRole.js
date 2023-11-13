// creation de la route pour la table Note

import { Router } from "express";
import { ajouterRole,RoleParId,listRole, supprimerRole, modifierRole} from "../controllers/role.js";
import { Role } from "../models/index.js";

const routeRole= Router()

// les routes

routeRole.get('/',listRole)

.get('/:id',RoleParId)
.post('/:id', ajouterRole)
.put('/:id', modifierRole)
.delete('/:id', supprimerRole)

export default Role;