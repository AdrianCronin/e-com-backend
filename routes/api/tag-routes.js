const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const results = await Tag.findAll({ include: Product })
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  };
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const results = await Tag.findByPk(req.params.id, { include: Product });
    if (!results) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(results);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  // req.body should look like :
  {
    

  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
