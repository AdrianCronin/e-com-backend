const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const results = await Category.findAll({ include: Product });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  };
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const results = await Category.findByPk(req.params.id, { include: Product });
    if (!results) {
      res.status(404).send('No category found with this id');
      return;
    }
    res.status(200).json(results);

  } catch (err) {
    res.status(500).json(err);
  };
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const results = await Category.create(req.body);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const results = await Category.update(req.body, { where: { id: req.params.id } });
    res.status(200).send('Category updated');
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
