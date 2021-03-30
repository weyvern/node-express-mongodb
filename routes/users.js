import express from 'express';
import { getAllUsers, getSingleUser, createNewUser } from '../controllers/users.js';
const users = express.Router();

users.get('/', getAllUsers);
users.get('/:id', getSingleUser);
users.post('/', createNewUser);

export default users;
