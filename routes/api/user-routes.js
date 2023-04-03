const router = require("express").Router();

// importing user controller functions
const { getAllUser, 
    getUserById, 
    addUser, 
    updateUser, 
    removeUser, 
    addFriend, 
    removeFriend,
} = require('../../controllers/User-controller');

// api/users
router
.route('/')
.get(getAllUser)
.post(addUser)

// api/users/:id
router
.route("/:id")
.get(getUserById)
.put(updateUser)
.delete(removeUser)

// api/users/:userId/friend/friendId
router
.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend)

module.exports = router;