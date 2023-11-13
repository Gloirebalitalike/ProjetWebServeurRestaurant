// Utilisateur avec les relations
import { Utilisateur } from "../models/index.js";

//Importer le module de hashage
import bcrypt from 'bcryptjs'


export const listUtilisateur = async (req, res) => {
    try {
        // Retourner la liste complete des u
        const resultat = await Utilisateur.findAll()
        res.status(200).json({ data: resultat })

    } catch (error) {

        res.json({ error: error.message })
    }
}

export const utilisateurParId = async (req, res) => {

    const id = req.params.id

    console.log("notre id", id)
    try {
        const etudiant = await Utilisateur.findByPk(id)

        res.status(200).json({ data: Utilisateur})

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const ajouterUtilisateur = async (req, res) => {

    //Si pas besoin de plus de details
    // const utilisateur= req.body

    // Destructurer si necessaire
    const { nom, prenom, email, motDePasse, dateDeNaissance } = req.body
    
    //Hacher le mot de passe
    const mdpCrypte=bcrypt.hashSync(motDePasse,10)

    const utilisateur = { nom, prenom, email, motDePasse:mdpCrypte, dateDeNaissance }
    try {
        await Utilisateur.create(utilisateur)
        res.status(201).json({ message: "L'utilisateur a ete ajoute avec succes" })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la creation de l'utilisateur" })

    }

}

export const modifierUtilisateur = async (req, res) => {
    const { id } = req.params
    const nouvelUtilisateur = req.body
    try {
        await Utilisateur.update(nouvelUtilisateur, { where: { id } })
        res.status(200).json({ message: "L'utilisateur a ete mis a jour avec succes" })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la creation de l'utilisateur" })
    }

}

export const supprimerUtilisateur = async (req, res) => {
    const id = req.params.id
    if(!parseInt(id)){
       return  res.status(200).json({ message: "Oh!, mais vous devez envoyer un entier la!" })
    }
    try {

        await Utilisateur.destroy({ where: { id } })
        res.status(200).json({ message: "L'utilisateur a ete mis supprime avec succes" })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la suppression de l'utilisateur" })

    }

}