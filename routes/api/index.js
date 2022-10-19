const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//adding prefix to routes that will be created in api sub folder 'thought-routes'
router.use('/thoughts', thoughtRoutes);

//adding prefix to routes that will be created in api sub folder 'user-routes'
router.use('/users', userRoutes);


module.exports = router;