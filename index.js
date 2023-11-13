import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import database from "./connexion.js";
import routesUtilisateur from './routes/routeUtilisateur.js';
import routerAuth from './routes/routeAuth.js';
import routesCommande from './routes/routeCommande.js'; 
import routesPanier from './routes/routePanier.js'; 
import routesCommentaire from './routes/routeCommentaire.js'; 
import routesProduit from './routes/routeProduit.js'; 

const { PORT } = dotenv.config().parsed;
const app = express();

// Synchroniser les modèles Sequelize avec la base de données
database.sync()
    .then(() => {
        console.log('Base de données synchronisée');
        demarrerServeur();
    })
    .catch((error) => {
        console.error('Erreur lors de la synchronisation de la base de données :', error);
    });

function demarrerServeur() {
    app.use(helmet());
    app.use(compression());
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('/salutation', (req, res) => {
        res.send('Bonjour tout le monde');
    });

    // Exemple pour aujourd'hui seulement
    // app.get('/utilisateur', listUtilisateur);
    app.get('/Role', listRole);

    // Utilisation des routes
    app.use('/utilisateur', routesUtilisateur);
    app.use('/login', routerAuth);
    app.use('/commande', routesCommande);
    app.use('/panier', routesPanier);
    app.use('/commentaire', routesCommentaire);
    app.use('/produit', routesProduit);

    app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`));
}
