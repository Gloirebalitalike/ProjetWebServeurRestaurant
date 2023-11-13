import { DataTypes } from 'sequelize';
import database from '../connexion.js';

const Commande = database.define('Commande', {
    produit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date_de_commande: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

export default Commande;
