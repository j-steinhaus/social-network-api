const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThoughts,
  deleteThoughts,
  updateThoughts,
  removeReactions,
  addReactions
  
} = require('../../controllers/thought-controller');

// POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThoughts);

// PUT, and DELETE
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

// creating POST
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

// DELETE 
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReactions);

module.exports = router;