const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        text: String
    },
    {
        timeStamp:true
    }
)

module.exports = mongoose.model('Goal',goalSchema)