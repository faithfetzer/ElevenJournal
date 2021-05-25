const Express = require('express');
const router = Express.Router();

router.get('/practice', (req, res) =>{
    res.send('hey this is a practice route!')
});

router.get('/about', (req, res) =>{
    res.send('this is the about route')
});

module.exports = router;
