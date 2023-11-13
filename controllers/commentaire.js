// fonction qui permet d'importer le  modèle Commentaire depuis son chemin
import { Commentaire } from "../models/index.js";

// Importation du module de hachage
import bcrypt from 'bcryptjs';

// Fonction qui permet de lister tous les commentaires
export const listCommentaire = async (req, res) => {
    try {
        // Récupérer la liste complète des commentaires depuis la base de données
        const resultat = await Commentaire.findAll();
        res.status(200).json({ data: resultat });
    } catch (error) {
        // Gérer les erreurs et renvoyer une réponse appropriée
        res.json({ error: error.message });
    }
}

// Fonction pour obtenir un commentaire par son ID
export const commentaireParId = async (req, res) => {
    const id = req.params.id;

    try {
        // Trouver un commentaire par l'ID spécifié
        const commentaire = await Commentaire.findByPk(id);

        res.status(200).json({ data: commentaire });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Fonction pour ajouter un nouveau commentaire
export const ajouterCommentaire = async (req, res) => {
    const {commentaireid, dateDuCommentaire } = req.body;

    // Hacher le mot de passe à l'aide de bcrypt
    const mdpCrypte = bcrypt.hashSync(motDePasse, 10);

    // Créer un objet commentaire avec le mot de passe haché

    try {
        // Créer un nouveau commentaire dans la base de données
        await Commentaire.create(commentaire);
        res.status(201).json({ message: "Le commentaire a été ajouté avec succès" });
    } catch (error) {
        // Gérer les erreurs lors de la création du commentaire
        res.status(400).json({ message: "Problème lors de la création du commentaire" });
    }
}

// Fonction pour mettre à jour un commentaire
export const modifierCommentaire = async (req, res) => {
    const { id } = req.params;
    const nouveauCommentaire = req.body;

    try {
        // Mettre à jour le commentaire avec l'ID spécifié
        await Commentaire.update(nouveauCommentaire, { where: { id } });
        res.status(200).json({ message: "Le commentaire a été mis à jour avec succès" });
    } catch (error) {
        // Gérer les erreurs lors de la mise à jour du commentaire
        res.status(400).json({ message: "Problème lors de la mise à jour du commentaire" });
    }
}

// Fonction pour supprimer un commentaire
export const supprimerCommentaire = async (req, res) => {
    const id = req.params.id;

    // Vérifier si l'ID est un entier valide
    if (!parseInt(id)) {
        return res.status(400).json({ message: "Oh !, mais vous devez envoyer un entier !" });
    }

    try {
        // Supprimer le commentaire avec l'ID spécifié
        await Commentaire.destroy({ where: { id } });
        res.status(200).json({ message: "Le commentaire a été supprimé avec succès" });
    } catch (error) {
        // Gérer les erreurs lors de la suppression du commentaire
        res.status(400).json({ message: "Problème lors de la suppression du commentaire" });
    }
}
