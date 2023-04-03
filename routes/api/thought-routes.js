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

// api/thoughts
router
.route('/')
.get(getAllThought)


// api/thoughts/:id
router
.route("/:userId")
.post(addThought)

// specific thought  /:thoughtId
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)

// 
router
.route('/userId/:thoughtId')
.delete(removeThought);

// api/thoughts/:thoughtId/reaction
router.route("/:thoughtId/reaction")
.post(addReaction);

// reactionId
router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
