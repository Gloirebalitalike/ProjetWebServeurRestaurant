import { DataTypes } from 'sequelize';
import database from '../connexion.js';

const Role = database.define('Role', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

export default Role;
