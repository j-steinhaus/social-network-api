const router = require('express').Router();
// importing all api routes
const apiRoutes = require('./api');

// add prefix to all api routes that are imported from the directory of 'api'
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;