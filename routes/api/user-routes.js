const router = require('express').Router();
const {
    getAllUsers,
    getUsersById,
    updateUsers,
    deleteUsers,
    removeFriends,
    addFriends,
    createUsers
} = require('../../controllers/user-controller');

//get all and post
router
  .route('/')
  .get(getAllUsers)
  .post(createUsers);

// put and delete
router
  .route('/:id')
  .get(getUsersById)
  .put(updateUsers)
  .delete(deleteUsers);

//post and delete
router
  .route('/:userId/friends/:friendId')
  .post(addFriends)
  .delete(removeFriends)

module.exports = router;