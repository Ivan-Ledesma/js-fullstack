const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.json({Text : 'hello world'}));

module.exports = router;