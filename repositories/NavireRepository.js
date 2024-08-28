const Navire = require('../models/Navire');
const Port = require('../models/Port');

class NavireRepository {
    async findAll() {
        return await Navire.findAll(
            {
                include: [
                    { model: Port }
                ]
            }
        );
    }

    async findById(id) {
        return await Navire.findByPk(id,{
            include: [
                { model: Port }
            ]
        });
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
