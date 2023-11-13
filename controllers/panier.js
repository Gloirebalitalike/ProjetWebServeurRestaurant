 // Utilisateur avec les relations
 //import { where } from "sequelize";

 import { Panier} from "../models/index.js";

 //Importer le module de hashage
 
 
 export const listPanier = async (req, res) => {
     try {
         // Retourner la liste complete des u
         const resultat = await Co.findAll()
         res.status(200).json({ data: resultat })
 
     } catch (error) {
 
         res.json({ error: error.message })
     }
 }
 
 export const panierParId = async (req, res) => {
 
     const id = req.params.id
 
     console.log("notre id", id)
     try {
         const panier = await Panier.findByPk(id)
 
         res.status(200).json({ data: Panier})
 
     } catch (error) {
         res.status(404).json({ message: error.message })
     }
 
 }
 
 export const ajouterPanier = async (req, res) => {
 
     
     // const commande = req.body
 
     // Destructurer si necessaire
     const { produit, quantite, dateDeCommande} = req.body
     
     //
 
     const commande = { produit, quantite, dateDeCommande }
     try {
         await Panier.create(commande)
         res.status(201).json({ message: "Le panier a ete ajoute avec succes" })
 
     } catch (error) {
         res.status(400).json({ message: "Probleme lors de la creation du panier" })
 
     }
 
 }
 
 export const modifierPanier = async (req, res) => {
     const { id } = req.params
     const nouvelPanier = req.body
     try {
         await Panier.update(nouvelPanier, { where: { id } })
         res.status(200).json({ message: "Le panier a ete mis a jour avec succes" })
 
     } catch (error) {
         res.status(400).json({ message: "Probleme lors de la creation du panier" })
     }
 
 }
 
 export const supprimerPanier = async (req, res) => {
     const id = req.params.id
     if(!parseInt(id)){
        return  res.status(200).json({ message: "Oh!, mais vous devez envoyer un entier la!" })
     }
     try {
 
         await Panier.destroy({ where: { id } })
         res.status(200).json({ message: "Le panier a ete mis supprime avec succes" })
 
     } catch (error) {
         res.status(400).json({ message: "Probleme lors de la suppression du panier" })
 
     }
 
 }