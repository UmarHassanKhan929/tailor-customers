const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    size:{
        kurtalength:{
            type: Number,
            required: true,
        },
        chest:{
            type: Number,
            required: true,
        },
        waist:{
            type: Number,
            required: true,
        },
        hips:{
            type: Number,
            required: true,
        },
        shoulders:{
            type: Number,
            required: true,
        },
        sleeves:{
            type: Number,
            required: true,
        },
        collar:{
            type: Number,
            required: true,
        },
        shalwarlength:{
            type: Number,
            required: true,
        },
    }
},
{timestamps:true}
);

module.exports = mongoose.model("Customer", customerSchema);
