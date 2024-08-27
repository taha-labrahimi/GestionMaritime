const express = require('express');
const router = express.Router();
const clientService = require('../services/clientService');


// Get all clients
router.get('/', async (req, res) => {
    try {
        const clients = await clientService.getAllClients();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching clients.' });
    }
});

// Get a client by ID
router.get('/:id', async (req, res) => {
    try {
        const client = await clientService.getClientById(req.params.id);
        if (client) {
            res.json(client);
        } else {
            res.status(404).json({ error: 'Client not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the client.' });
    }
});

// Create a new client
router.post('/', async (req, res) => {
    try {
        const newClient = await clientService.createClient(req.body);
        res.status(201).json(newClient);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the client.' });
    }
});

// Update a client
router.put('/:id', async (req, res) => {
    try {
        const updatedClient = await clientService.updateClient(req.params.id, req.body);
        if (updatedClient) {
            res.json(updatedClient);
        } else {
            res.status(404).json({ error: 'Client not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the client.' });
    }
});

// Delete a client
router.delete('/:id', async (req, res) => {
    try {
        const deletedClient = await clientService.deleteClient(req.params.id);
        if (deletedClient) {
            res.json({ message: 'Client deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Client not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the client.' });
    }
});

module.exports = router;
