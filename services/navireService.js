const navireRepository = require('../repositories/navireRepository');

class NavireService {
    async getAllNavires() {
        return await navireRepository.findAll();
    }

    async getNavireById(id) {
        return await navireRepository.findById(id);
    }

    async createNavire(navireData) {
        return await navireRepository.create(navireData);
    }

    async updateNavire(id, navireData) {
        return await navireRepository.update(id, navireData);
    }

    async deleteNavire(id) {
        return await navireRepository.delete(id);
    }
}

module.exports = new NavireService();
