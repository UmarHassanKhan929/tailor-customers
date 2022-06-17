const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    orderDetail: {
        cloth: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        }
    },
    customer: {
        type: mongoose.Schema.ObjectId,
        ref: "Customer",
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Processing",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    collectAt: {
        type:Date,
        default: new Date(+new Date() + 7*24*60*60*1000)
    }
});

module.exports = mongoose.model("Order", orderSchema);
