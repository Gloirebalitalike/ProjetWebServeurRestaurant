import { Produit } from "../models/index.js";

export const listProduit = async (req, res) => {
    try {
        const resultat = await Produit.findAll();
        res.status(200).json({ data: resultat });
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const ProduitParId = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Produit.findByPk(id);
        res.status(200).json({ data: result });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const ajouterProduit = async (req, res) => {
    const { nomduproduit, prix, dateDajout } = req.body;

    const produit = { nomduproduit, prix, dateDajout };

    try {
        await Produit.create(produit);
        res.status(201).json({ message: "Le produit a été ajouté avec succès." });
    } catch (error) {
        res.status(400).json({ message: "Problème lors de la création du nouveau produit." });
    }
};

export const modifierProduit = async (req, res) => {
    const { id } = req.params;

    const nouveauProduit = req.body;
    try {
        await Produit.update(nouveauProduit, { where: { id } });
        res.status(200).json({ message: "Le produit a été mis à jour avec succès." });
    } catch (error) {
        res.status(400).json({ message: "Problème lors de la modification du produit." });
    }
};

export const supprimerProduit = async (req, res) => {
    const id = req.params.id;
    if (!parseInt(id)) {
        return res.status(400).json({ message: "Oh! Mais le produit n'est pas valide !" });
    }
    try {
        await Produit.destroy({ where: { id } });
        res.status(200).json({ message: "Le produit a été supprimé avec succès." });
    } catch (error) {
        res.status(400).json({ message: "Problème lors de la suppression du produit." });
    }
};
