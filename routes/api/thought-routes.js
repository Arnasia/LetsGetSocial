const router = require("express").Router();
// importing functions from thought controller
const { getAllThought, 
    getThoughtById, 
    addThought, 
    updateThought, 
    removeThought, 
    addReaction, 
    removeReaction,
} = require('../../controllers/Thought-controller');

