const { User, Thought } = require('../models');

const userController = {
    allUser(req, res){
        User.find().then((response) => {
            res.json(response)
        })
    },
    
    singleUser(req, res){
        User.findById(req.params.userId)
        .populate('thoughts')
        .populate('friends')
        .then((response) => {
            res.json(response)
        })
    },

    newUser(req, res){
        User.create(req.body)
        .then((response) => {
            res.json(response)
        })
    },

    updateUser(req, res){
        User.updateOne(req.body.userId)
        .then((response) => {
            res.json(response)
        })
    },

    deleteUser(req, res){
        User.destroy(req.params.userId)
        .then((response) => {
            res.json(response)
        })
    },

    addFriend(req, res){
        User.create(req.body)
        .then((response) => {
            res.json(response)
        })
    },

    deleteFriend(req, res){
        User.destroy(req.params.friendId)
        .then((response) => {
            res.json(response)
        })
    }
}

module.exports = userController