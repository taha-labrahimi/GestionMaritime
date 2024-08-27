const Conteneur = require('../models/Conteneur');
const Navire = require('../models/Navire');
const Armateur = require('../models/Armateur');
const Port = require('../models/Port');
const Client = require('../models/Client');

class ConteneurRepository {
    async findAll() {
        return await Conteneur.findAll({
            include: [
                { model: Navire },
                { model: Armateur },
                { model: Port },
                { model: Client }
            ]
        });
    }

    async findById(id) {
        return await Conteneur.findByPk(id, {
            include: [
                { model: Navire },
                { model: Armateur },
                { model: Port },
                { model: Client }
            ]
        });
    }

    async create(conteneurData) {
        return Conteneur.create(conteneurData);
    }

    async update(id, conteneurData) {
        const conteneur = await Conteneur.findByPk(id);
        if (conteneur) {
            return await conteneur.update(conteneurData);
        }
        return null;
    }

    async delete(id) {
        const conteneur = await Conteneur.findByPk(id);
        if (conteneur) {
            return await conteneur.destroy();
        }
        return null;
    }
}

module.exports = new ConteneurRepository();
