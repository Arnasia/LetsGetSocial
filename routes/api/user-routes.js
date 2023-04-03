const router = require("express").Router();
// IMPORT
const { getAllUser, 
    getUserById, 
    addUser, 
    updateUser, 
    removeUser, 
    addFriend, 
    removeFriend,
} = require('../../controllers/User-controller');

