import { Commande } from "../models/index.js";

export const listCommande = async (req, res) => {
    try {
        const resultat = await Commande.findAll();
        res.status(200).json({ data: resultat });
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const CommandeParId = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Commande.findByPk(id);
        res.status(200).json({ data: result });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const ajouterCommande = async (req, res) => {
    const { produit, quantite, dateDecommande} = req.body;

    const Commande = { produit, quantite, dateDecommande };

    try {
        await Commande.create(Commande);
        res.status(201).json({ message: "La commande a été ajoutée ." });
    } catch (error) {
        res.status(400).json({ message: "Problème lors de la création de la nouvelle commande" });
    }
};

export const modifierCommande = async (req, res) => {
    const { id } = req.params;

    const nouvelleCommande = req.body;
    try {
        await Commande.update(nouvelleCommande, { where: { id } });
        res.status(200).json({ message: "La commande a été mise à jour ." });
    } catch (error) {
        res.status(400).json({ message: "Problème lors de la modification de la commande." });
    }
};

export const supprimerCommande = async (req, res) => {
    const id = req.params.id;
    if (!parseInt(id)) {
        return res.status(400).json({ message: "la commande n'est pas valide !" });
    }
    try {
        await Commande.destroy({ where: { id } });
        res.status(200).json({ message: "La commande a été supprimée ." });
    } catch (error) {
        res.status(400).json({ message: "Problème lors de la suppression de la commande." });
    }
};
