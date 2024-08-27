const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

class UserService {
    async registerUser(userData) {
        const existingUser = await userRepository.findByUsername(userData.username);
        if (existingUser) {
            throw new Error('Username already exists');
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        return await userRepository.createUser(userData);
    }

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
}

module.exports = new UserService();
