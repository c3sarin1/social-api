const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');
const moment = require('moment');

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) => moment(createdAt).format('LLL')
    },

    userName: {
        type: String, 
        required: true,
    },

    reactions: [reactionSchema]
},
{
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false,
  });


thoughtSchema.virtual('reactionCount').get(function () {
    return `${this.reactions.length}`
});

const Thought = model('Thought', thoughtSchema)

module.exports = Thought