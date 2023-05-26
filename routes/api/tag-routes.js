const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  
  //this route finds all tags and includes its associated product data
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
    //then returns the results as json
  }).then(dbTagData => res.json(dbTagData))
    //if there is a server error, a 500 status is returned
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  //this route finds a single tag by its id and includes its associated product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
    //then returns the results as json
  }).then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagData)
  })
    //if there is a server error, a 500 status is returned
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  //this route creates a new tag
  Tag.create({
    //the tag name is taken from the request body
    tag_name: req.body.tag_name
  })
    //then returns the results as json
    .then(dbTagData => res.json(dbTagData))
    //if there is a server error, a 500 status is returned
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  
  // this route updates a tag's name by its id
  // the tag name is taken from the request body and the id from the request parameters
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    //then returns the results as json
    .then(dbTagData => {
      if (!dbTagData[0]) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData)
    })
    //if there is a server error, a 500 status is returned
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  
  // this route deletes a tag that matches the id given in the request parameters
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    //then returns the results as json
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData)
    })
    //if there is a server error, a 500 status is returned
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
