const {getContacts,addContact,deleteContact} = require('../Service/ContactService')

const getAllContacts = async (req,res) => {
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10
    
    
    const skip = (page -1) * limit;
    try {
        const { contacts, total } = await getContacts(limit,skip)
        
        
        res.status(200).json({
            data: contacts,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        })
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
    // console.log(req);
    
    const id = req.params.id;
    
    
    try {
        const response = await deleteContact(id);
        
        
        res.status(200).json({message: 'Contact Deleted'}) 
    } catch (error) {
        res.status(400).json({message: 'Failed to delete the contact'})
    }
}


module.exports = {getAllContacts,createContact,deleteContactByID}