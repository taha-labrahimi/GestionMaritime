const Navire = require('../models/Navire');

class NavireRepository {
    async findAll() {
        return await Navire.findAll();
    }

    async findById(id) {
        return await Navire.findByPk(id);
    }

    async create(navireData) {
        return Navire.create(navireData);
    }

    async update(id, navireData) {
        const navire = await Navire.findByPk(id);
        if (navire) {
            return await navire.update(navireData);
        }
        return null;
    }

    async delete(id) {
        const navire = await Navire.findByPk(id);
        if (navire) {
            return await navire.destroy();
        }
        return null;
    }
}

module.exports = new NavireRepository();
