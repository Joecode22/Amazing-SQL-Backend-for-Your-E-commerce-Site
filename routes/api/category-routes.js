const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  //the api catagories endpoing that gets all catagories
  //and includes its associated products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    //then returns the results as json
    .then(dbCategoryData => res.json(dbCategoryData))
    //if there is a server error, a 500 status is returned
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }
    );
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  //this route gets a single cataegory by its id
  Category.findOne({
    where: {
      id: req.params.id
    },
    //includes the associated products
    include: [Product],
  })
    //then returns the results as json
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData)
    })
    //if there is a server error, a 500 status is returned
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  //this route creates a new category
  Category.create({
    //the category name is taken from the request body
    category_name: req.body.category_name
  })
    //then returns the results as json
    .then(dbCategoryData => res.json(dbCategoryData))
    //if there is a server error, a 500 status is returned
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a catagory by its `id` value
  //this route updates a category by its id
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    //then returns the results as json
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData)
    })
    //if there is a server error, a 500 status is returned
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  //this route deletes a category by its id
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    //then returns the results as json
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData)
    }
    )
    //if there is a server error, a 500 status is returned
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
