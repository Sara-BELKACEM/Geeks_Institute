const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const saltRounds = 10;

module.exports = {
  register: async (req, res) => {
    try {
      const { email, username, password, first_name, last_name } = req.body;

      if (!email || !username || !password) {
        return res.status(400).json({ message: 'Email, username, and password are required.' });
      }

      const existingUser = await userModel.findUserByUsername(username);
      if (existingUser) {
        return res.status(409).json({ message: 'Username already exists.' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create user with transaction
      const newUser = await userModel.createUser({ email, username, first_name, last_name }, hashedPassword);

      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
      }

      const user = await userModel.findUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const hashRecord = await userModel.findPasswordByUsername(username);
      if (!hashRecord) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Compare password
      const match = await bcrypt.compare(password, hashRecord.password);
      if (!match) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      res.json({ message: 'Login successful', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userModel.getUserById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const userData = req.body;

      const updatedUser = await userModel.updateUserById(id, userData);
      if (updatedUser.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ message: 'User updated', user: updatedUser[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};
