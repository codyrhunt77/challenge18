const { Schema , model } = require('mongoose');
const thoughtsSchema = new Schema( {
    thoughtsText: {
        type: stringifyForDisplay,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default:,
        get:,
    },
    reactions: [reactionsSchema],
},
{
toJson: {
    getters: true,
},
id: false,
}
);
thoughtsSchema.virtuals('reactionCount').get(function () {
    return this.reactions.length;
});
const Thoughts = model ('thoughtsModel' , thoughtsSchema);
module.exports = Thoughts;