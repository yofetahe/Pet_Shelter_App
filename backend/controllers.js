const { PetShelter } = require('./models');

module.exports = {

  getAll: (req, res) => {
    PetShelter.find().sort({type:1})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getById: (req, res) => {
    const ID = req.params.id;
    PetShelter.find({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addContent: (req, res) => {
    const DATA = req.body;
    // DATA.type = DATA.type.toLower();
    PetShelter.create(DATA, {runValidators: true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateContentById: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    PetShelter.findOneAndUpdate({ _id: ID }, DATA, {runValidators: true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteContentById: (req, res) => {
    const ID = req.params.id;
    PetShelter.findOneAndDelete({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getByName: (req, res) => {
    const NAME = req.params.name;
    PetShelter.find({name: NAME})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }

}