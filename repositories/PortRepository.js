const Port = require('../models/Port');

class PortRepository {
    async findAll() {
        return await Port.findAll();
    }

    async findById(id) {
        return await Port.findByPk(id);
    }

    async create(portData) {
        return Port.create(portData);
    }

    async update(id, portData) {
        const port = await Port.findByPk(id);
        if (port) {
            return await port.update(portData);
        }
        return null;
    }

    async delete(id) {
        const port = await Port.findByPk(id);
        if (port) {
            return await port.destroy();
        }
        return null;
    }
}

module.exports = new PortRepository();
