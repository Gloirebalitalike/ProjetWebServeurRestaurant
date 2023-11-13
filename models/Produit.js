import { DataTypes } from 'sequelize';
import database from '../connexion.js';

const Produit = database.define('Produit', {
    nomDuProduit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prix: {
        type: DataTypes.FLOAT, 
        allowNull: false
    },
    dateDajout: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

export default Produit;
