let express = require('express');
let router = express.Router();
let {create, signUp, updateUser, verifyMail, signIn} = require('../controllers/userController')


router.post('/', create)
router.post('/signup' ,signUp)
router.patch('/:id', updateUser)
router.get('/verification/:code',verifyMail)
router.post('/signin' ,signIn)



module.exports = router;
