const dateFormat = require('../')
const { Schema , Types } = require('mongoose');
const reactionsSchema = new Schema( {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionsBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timeStamp => dateFormat(timeStamp),
    },
},
{
    toJson: {
        getters: true,
    },
    id: false
}
);
module.exports = reactionsSchema;