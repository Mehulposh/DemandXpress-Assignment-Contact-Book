const {Schema, default: mongoose} = require("mongoose")

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
       
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("Contacts", contactSchema);