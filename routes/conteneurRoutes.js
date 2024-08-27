const express = require('express');
const router = express.Router();
const conteneurService = require('../services/conteneurService');

router.get('/', async (req, res) => {
    try {
        const conteneurs = await conteneurService.getAllConteneurs();
        res.json(conteneurs);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching conteneurs.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const conteneur = await conteneurService.getConteneurById(req.params.id);
        if (conteneur) {
            res.json(conteneur);
        } else {
            res.status(404).json({ error: 'Conteneur not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the conteneur.' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newConteneur = await conteneurService.createConteneur(req.body);
        res.status(201).json(newConteneur);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the conteneur.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedConteneur = await conteneurService.updateConteneur(req.params.id, req.body);
        if (updatedConteneur) {
            res.json(updatedConteneur);
        } else {
            res.status(404).json({ error: 'Conteneur not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the conteneur.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedConteneur = await conteneurService.deleteConteneur(req.params.id);
        if (deletedConteneur) {
            res.json({ message: 'Conteneur deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Conteneur not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the conteneur.' });
    }
});

module.exports = router;
