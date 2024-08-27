const armateurRepository = require('../repositories/armateurRepository');

class ArmateurService {
    async getAllArmateurs() {
        return await armateurRepository.findAll();
    }

    async getArmateurById(id) {
        return await armateurRepository.findById(id);
    }

    async createArmateur(armateurData) {
        return await armateurRepository.create(armateurData);
    }

    async updateArmateur(id, armateurData) {
        return await armateurRepository.update(id, armateurData);
    }

    async deleteArmateur(id) {
        return await armateurRepository.delete(id);
    }
}

module.exports = new ArmateurService();
