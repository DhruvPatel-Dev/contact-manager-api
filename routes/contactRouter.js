const express = require('express');
const router = express.Router();
const {getContact,createContact,putContact,deleteContact,getContacts} = require('../controllers/contactController');
const { validateToken } = require('../middlewares/validateToken');


router.use(validateToken);
router.route('/').get(getContacts).post(createContact);
router.route('/:id').put(putContact).delete(deleteContact).get(getContact);



module.exports=router;      