const { Thoughts , User } = require('../models');
const thoughtsController = {
    getThoughts(req,res) {
        Thoughts.find()
        .sort({ createdAt: -1})
        .then((dbThoughtsData) => {
            res.json(dbThoughtsData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    getSingleThought(req,res) {
        Thoughts.findOne({_id: req.params.thoughtsId})
        .then((dbThoughtsData) => {
            if (!dbThoughtsData) {
                return res.status(404).json({ message:'Need id.'});
            }
            res.json(dbThoughtsData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    createThoughts(req,res) {
        Thoughts.create(req.body)
        .then((dbThoughtsData) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId },
                { $push: { thoughts: dbThoughtsData._id}},
                { new: true}
            );
        })
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(404).json({ message: 'Though made but no user id.'});
            }
            res.json({ message: 'Thought created.'});
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    updateThoughts(req,res) {
        Thoughts.findOneAndUpdate({_id: req.params.thoughtsId}, { $set: req.body}, {runValidators: true, new: true})
        .then((dbThoughtsData) => {
            if (!dbThoughtsData) {
                return res.status(404).json({message:'No id.'});
            }
            res.json(dbThoughtsData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    deleteThoughts(req,res) {
        Thoughts.findOneAndRemove({_id: req.params.thoughtsId})
        .then((dbThoughtsData) => {
            if(!dbThoughtsData) {
                return res.status(404).json({message: 'no id'});
            }
            return User.findOneAndUpdate(
                { thoughts: req.params.thoughtsId},
                { $pull: {thoughts: req.params.thoughtsId}},
                {new: true},
            );
        })
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(400).json({ message:'Though deleted.'})
            }
        })
    }
}