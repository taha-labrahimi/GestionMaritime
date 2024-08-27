const conteneurRepository = require('../repositories/conteneurRepository');

class ConteneurService {
    async getAllConteneurs() {
        return await conteneurRepository.findAll();
    }

    async getConteneurById(id) {
        return await conteneurRepository.findById(id);
    }

    async createConteneur(conteneurData) {
        return await conteneurRepository.create(conteneurData);
    }

    async updateConteneur(id, conteneurData) {
        return await conteneurRepository.update(id, conteneurData);
    }

    async deleteConteneur(id) {
        return await conteneurRepository.delete(id);
    }
}

module.exports = new ConteneurService();
