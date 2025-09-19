const express = require('express');
const {getAllContacts,createContact,deleteContactByID} = require('../Controller/ContactController');

const router = express.Router()

router.post('/',createContact)
router.get('/',getAllContacts)
router.delete('/:id',deleteContactByID)

module.exports = router