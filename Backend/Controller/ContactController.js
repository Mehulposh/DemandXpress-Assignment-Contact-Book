const {getContacts,addContact,deleteContact} = require('../Service/ContactService')

const getAllContacts = async (req,res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10

    const skip = (page -1) * limit;
    try {
        const data = await getContacts(limit,skip)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message: 'Failed to fetch all contacts'})
    }
}

const createContact = async (req,res) => {
    const { name, email, phone } = req.body;
    try {
        const response = await addContact(name, email, phone);
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({message: 'Failed to create contact'})
    }
}


const deleteContactByID = async (req,res) => {
    const id = req.params._id;
    try {
        const response = await deleteContact(id);
        res.status(204)
    } catch (error) {
        res.status(400).json({message: 'Failed to delete the contact'})
    }
}


module.exports = {getAllContacts,createContact,deleteContactByID}