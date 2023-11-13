import { DataTypes } from 'sequelize';
import database from '../connexion.js';

const Commentaire = database.define('Commentaire', {
    commentaireid: {
        type: DataTypes.TEXT, 
        allowNull: false
    },
    dateDuCommentaire: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

export default Commentaire;
