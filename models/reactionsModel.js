const { Schema , model } = require('mongoose');
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
        default: ,
        get: ,
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