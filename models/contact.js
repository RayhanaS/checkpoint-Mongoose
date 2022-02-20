const mongoose = require('mongoose')
const contact = new mongoose.Schema  ({
    name :{ type: String , required: true},
    email : {type: String , required: true , unique: true},
    age : {type: Number}
})


module.exports = mongoose.model ('member', contact) ;