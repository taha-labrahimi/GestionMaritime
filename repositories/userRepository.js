const User = require('../models/User');

class UserRepository {
    // Find a user by their username
    async findByUsername(username) {
        return await User.findOne({ where: { username } });
    }

    // Find a user by their email
    async findByEmail(email) {
        return await User.findOne({ where: { email } });
    }

    // Create a new user
    async createUser(userData) {
        return User.create(userData);
    }

    // Find a user by their ID
    async findById(id) {
        return await User.findByPk(id);
    }

    // Update a user's data
    async updateUser(id, userData) {
        const user = await User.findByPk(id);
        if (user) {
            return await user.update(userData);
        }
        return null;
    }
}

module.exports = new UserRepository();
