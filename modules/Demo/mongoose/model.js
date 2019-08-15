const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    eid: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory',
        default: []
    }]
}, {
        collection: 'Employee',
        timestamps: true
    });


module.exports = mongoose.model("Employee", employeeSchema);