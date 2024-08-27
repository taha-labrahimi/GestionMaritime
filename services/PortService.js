const portRepository = require('../repositories/portRepository');

class PortService {
    async getAllPorts() {
        return await portRepository.findAll();
    }

    async getPortById(id) {
        return await portRepository.findById(id);
    }

    async createPort(portData) {
        return await portRepository.create(portData);
    }

    async updatePort(id, portData) {
        return await portRepository.update(id, portData);
    }

    async deletePort(id) {
        return await portRepository.delete(id);
    }
}

module.exports = new PortService();
