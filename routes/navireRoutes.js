const express = require('express');
const router = express.Router();
const navireService = require('../services/navireService');

router.get('/', async (req, res) => {
    try {
        const navires = await navireService.getAllNavires();
        res.json(navires);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching navires.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const navire = await navireService.getNavireById(req.params.id);
        if (navire) {
            res.json(navire);
        } else {
            res.status(404).json({ error: 'Navire not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the navire.' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newNavire = await navireService.createNavire(req.body);
        res.status(201).json(newNavire);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the navire.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedNavire = await navireService.updateNavire(req.params.id, req.body);
        if (updatedNavire) {
            res.json(updatedNavire);
        } else {
            res.status(404).json({ error: 'Navire not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the navire.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedNavire = await navireService.deleteNavire(req.params.id);
        if (deletedNavire) {
            res.json({ message: 'Navire deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Navire not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the navire.' });
    }
});

module.exports = router;
