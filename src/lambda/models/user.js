const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Name is required']
    },
    wallet: {
        type: Number,
        max: 1000
    },
    discountid: String,
    discountcode: String,
    numberofUsages: {
        type:Number,
        default: 0
    }
    
});

module.exports = schema;


