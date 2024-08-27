const Armateur = require('../models/Armateur');

class ArmateurRepository {
    async findAll() {
        return await Armateur.findAll();
    }

    async findById(id) {
        return await Armateur.findByPk(id);
    }

    async create(armateurData) {
        return Armateur.create(armateurData);
    }

    async update(id, armateurData) {
        const armateur = await Armateur.findByPk(id);
        if (armateur) {
            return await armateur.update(armateurData);
        }
        return null;
    }

    async delete(id) {
        const armateur = await Armateur.findByPk(id);
        if (armateur) {
            return await armateur.destroy();
        }
        return null;
    }
}

module.exports = new ArmateurRepository();
