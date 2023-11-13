import { DataTypes } from 'sequelize';
import database from '../connexion.js';

const Panier = database.define('Panier', {
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prixUnitaire: {
        type: DataTypes.FLOAT, 
        allowNull: false
    },
    totalDuPanier: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    statutDuPanier: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    dateDeCreation: {
        type: DataTypes.DATE,
        allowNull: false
    },
    
});

export default Panier;
