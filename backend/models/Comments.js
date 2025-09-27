const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentsSchema = new mongoose.Schema({
    // done by passport.js automatically
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    // have the id if card.
    cardId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    // done by passport.js automatically
    userName: {
        type: String,
        required: true
    },
    // comments is an array in which multiple objects containing time and text are stored
    comments: [{
        comment: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    // this date is used to display comments based on time at which they are posted
    date: {
            type: Date,
            default: Date.now
        }
});

module.exports = mongoose.model("Comments", CommentsSchema);