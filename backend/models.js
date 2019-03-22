const mongoose = require('mongoose');
require('./dbConnection')(mongoose);

const PetSheltersSchema = new mongoose.Schema({
    name: {
        type: String, 
        minlength: [3, 'Pet Name should be at least 3 characters'],        
        // required: [true, 'Pet name is required']
    },
    type: {
        type: String, 
        minlength: [3, 'Pet type should be at least 3 characters'], 
        // required: [true, 'Pet type is required']
    },
    description: {
        type: String, 
        minlength: [3, 'Pet description should be at least 3 characters'], 
        // required: [true, 'Pet description is required']
    },
    skill_one: {type: String, default: ""},
    skill_two: {type: String, default: ""},
    skill_three: {type: String, default: ""},
    likes: {type: Number, default: 0}
});

const PetShelter = mongoose.model('PetShelters', PetSheltersSchema);

module.exports = { PetShelter };