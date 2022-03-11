const { User, Thought } = require('../models');

const thoughtController = {
    allThoughts(req, res){
        Thought.find().then((response) => {
            res.json(response)
        })
    },

    singleThought(req, res){
        Thought.findById(req.params.thoughtId)
        .populate('reactions')
        .then((response) => {
            res.json(response)
        })
    },

    newThought(req, res){
        Thought.create(req.body)
        .then((response) => {
            res.json(response)
        })
    },

    updateThought(req, res){
        Thought.updateOne(req.body.thoughtId)
        .then((response) => {
            res.json(response)
        })
    },

    deleteThought(req, res){
        Thought.destroy(req.params.thoughtId)
        .then((response) => {
            res.json(response)
        })
    }
}

module.exports = thoughtController