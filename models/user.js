//accessing a model
const { Schema, model } = require('mongoose');
const moment = require('moment');

//defining model
const UserSchema = new Schema({
    username: {
        //schema gotcha
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        //schema gotcha
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// reaction count to the arrays -- a setter
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// UserSchema creates user model
const User = model('User', UserSchema);

// exporting user model
module.exports = User;