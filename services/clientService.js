const clientRepository = require('../repositories/clientRepository');

class ClientService {
    async getAllClients() {
        return await clientRepository.findAll();
    }

    async getClientById(id) {
        return await clientRepository.findById(id);
    }

    async createClient(clientData) {
        // Add business logic or validation here if needed
        return await clientRepository.create(clientData);
    }

    async updateClient(id, clientData) {
        // Add business logic or validation here if needed
        return await clientRepository.update(id, clientData);
    }

    async deleteClient(id) {
        // Add business logic or validation here if needed
        return await clientRepository.delete(id);
    }
}

module.exports = new ClientService();
