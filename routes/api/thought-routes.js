const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  deleteThought,
  updateThought,
  removeReaction,
  addReaction
  
} = require('../../controllers/thought-controller');

// POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// PUT, and DELETE
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST new 
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

// DELETE 
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;