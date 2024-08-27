const Client = require('../models/Client');

class ClientRepository {
    async findAll() {
        return await Client.findAll();
    }

    async findById(id) {
        return await Client.findByPk(id);
    }

    async create(clientData) {
        return Client.create(clientData);
    }

    async update(id, clientData) {
        const client = await Client.findByPk(id);
        if (client) {
            return await client.update(clientData);
        }
        return null;
    }

    async delete(id) {
        const client = await Client.findByPk(id);
        if (client) {
            return await client.destroy();
        }
        return null;
    }
}

module.exports = new ClientRepository();
