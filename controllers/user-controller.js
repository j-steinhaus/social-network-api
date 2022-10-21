//accessing user and thought model
const { User, Thought } = require('../models');

// controller that holds the functionality by creating the API routes
const userControllers = {

    // all users - GET
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // creating a user by id
    createUsers({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    // user update by using id
    updateUsers({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    //send 404 if no user is found with the specific id used
                    res.status(404).json({ message: 'Error! No user found with that specific id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    // get user by using an id
    getUsersById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'friends',
                populate: { path: 'friends' },
                select: '-__v'
            })
            .populate({
                path: 'thoughts'
            })
            .then(dbUserData => {
                //send 404 if no user is found with the specific id used
                if (!dbUserData) {
                    res.status(404).json({ message: 'Error! No user found with that specific id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // add friends to users
    addFriends({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Sorry. User id or friend id is incorrect.' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    // remove friends from user 
    removeFriends({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Sorry. User id or friend id is incorrect.' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete user
    deleteUsers({ params }, res) {
        Thought.deleteMany({})
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

}

module.exports = userControllers;
