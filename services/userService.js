const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

class UserService {
    // Register a new user
    async registerUser(userData) {
        const existingUser = await userRepository.findByUsername(userData.username);
        if (existingUser) {
            throw new Error('Username already exists');
        }

        userData.password = await bcrypt.hash(userData.password, 10);
        return await userRepository.createUser(userData);
    }

    // Authenticate user (login)
    async authenticateUser(username, password) {
        const user = await userRepository.findByUsername(username);
        if (!user) {
            throw new Error('Invalid username or password');
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error('Invalid username or password');
        }

        const token = jwt.sign({ id: user.id, username: user.username }, 'your_super_secret_key_123', { expiresIn: '1h' });
        return { user, token };
    }

    // Update user information
    async updateUser(id, updates) {
        try {
            const user = await userRepository.findById(id);

            if (!user) {
                throw new Error('User not found');
            }

            // If password is being updated, hash it before saving
            if (updates.password) {
                updates.password = await bcrypt.hash(updates.password, 10);
            }

            // Update the user using the repository directly
            return await userRepository.updateUser(user.id, updates);

        } catch (error) {
            throw new Error(`Error updating user: ${error.message}`);
        }
    }

}

module.exports = new UserService();
