//accessing a model
const { Schema, model } = require('mongoose');
const moment = require('moment');

//defining model
const ReactionSchema = new Schema(
    {
        reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId()
        },
        reactionBody: {
          type: String,
          required: true,
          maxlength: 280
        },
        username: {
          type: String,
          required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
          }
      },
      {
        toJSON: {
          getters: true
        }
      }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtTime => formatCreationDate(createdAtTime)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// reaction count to the arrays -- a setter
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

// ThoughtSchema creates thought model
const Thought = model('Thought', ThoughtSchema);

// exporting thought model
module.exports = Thought;