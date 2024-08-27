const express = require('express');
const router = express.Router();
const armateurService = require('../services/armateurService');

router.get('/', async (req, res) => {
    try {
        const armateurs = await armateurService.getAllArmateurs();
        res.json(armateurs);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching armateurs.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const armateur = await armateurService.getArmateurById(req.params.id);
        if (armateur) {
            res.json(armateur);
        } else {
            res.status(404).json({ error: 'Armateur not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the armateur.' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newArmateur = await armateurService.createArmateur(req.body);
        res.status(201).json(newArmateur);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the armateur.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedArmateur = await armateurService.updateArmateur(req.params.id, req.body);
        if (updatedArmateur) {
            res.json(updatedArmateur);
        } else {
            res.status(404).json({ error: 'Armateur not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the armateur.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedArmateur = await armateurService.deleteArmateur(req.params.id);
        if (deletedArmateur) {
            res.json({ message: 'Armateur deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Armateur not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the armateur.' });
    }
});

module.exports = router;
