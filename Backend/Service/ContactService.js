const { default: mongoose } = require("mongoose");
const ContactModel = require('../Model/ContactModel')

const getContacts = async (limit,skip) => {
    try {
        const [contacts,total] = await Promise.all([
            ContactModel.find({}).skip(skip).limit(limit),
            ContactModel.countDocuments()
        ])
        return [contacts,total]
    } catch (error) {
        return error
    }
}


const addContact = async(name,email,contact) => {
    const ContactObject = ContactModel({name,email,contact})
    try {
        const response = await ContactObject.save();
        return response
    } catch (error) {
        return error
    }
}

const deleteContact = async (id) => {
    try {
        const response = await ContactModel.findByIdAndDelete(id);
        return response
    } catch (error) {
        return error
    }
}


modulee.exports = {getContacts,addContact,deleteContact}