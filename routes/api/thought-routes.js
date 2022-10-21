const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThoughts,
  deleteThoughts,
  deleteReactions,
  updateThoughts
  
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
  .post(createThoughts)

// DELETE 
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReactions);

module.exports = router;