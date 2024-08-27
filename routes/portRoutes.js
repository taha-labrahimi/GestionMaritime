

const express = require('express');
const router = express.Router();
const portService = require('../services/portService');

router.get('/', async (req, res) => {
    try {
        const ports = await portService.getAllPorts();
        res.json(ports);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching ports.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const port = await portService.getPortById(req.params.id);
        if (port) {
            res.json(port);
        } else {
            res.status(404).json({ error: 'Port not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the port.' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newPort = await portService.createPort(req.body);
        res.status(201).json(newPort);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the port.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPort = await portService.updatePort(req.params.id, req.body);
        if (updatedPort) {
            res.json(updatedPort);
        } else {
            res.status(404).json({ error: 'Port not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the port.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedPort = await portService.deletePort(req.params.id);
        if (deletedPort) {
            res.json({ message: 'Port deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Port not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the port.' });
    }
});

module.exports = router;
