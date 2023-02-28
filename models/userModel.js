const { Schema , model } = require('mongoose');
const userSchema = new Schema( {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/],
    },
    thoughts: [ {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
    }, ],
},
{
    toJson: {
        virtuals: true,
    },
    id: false,
}
);
userSchema.virtuals('friendCount').get(function() {
    return this.friends.length;
});
const User = model('userModel', userSchema);
module.exports = User;