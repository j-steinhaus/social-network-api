const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    updateUser,
    createUser,
    deleteUser,
    removeFriend,
    addFriend
} = require('../../controllers/user-controller');

//get all and post
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// put and delete
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

//post and delete
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend)

module.exports = router;