const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { restore } = require('../../models/Product');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  try {
    const results = await Tag.findAll({ include: Product })
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  };
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const results = await Tag.findByPk(req.params.id, { include: Product });
    if (!results) {
      res.status(404).json('No tag found with this id!');
      return;
    }
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  };
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const results = await Tag.create(req.body);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const results = await Tag.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(`tag_name changed to ${req.body.tag_name}`);
  } catch (err) {
    res.status(500).json(err);
  };
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const results = await Tag.destroy({where: {id: req.params.id}});
    if (!results) {
      res.status(404).json('No tag found with this id!');
      return;
    };
    res.status(200).json(`Tag deleted.`);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
