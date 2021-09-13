const express = require('express');
const router = express.Router();
const news = require('../Services/News');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await news.getMultiple());
  } catch (err) {
    console.error(`Error while getting news `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next){
  try{
    res.json(await news.create(req.body));
  } catch (err)
  {
    console.error("Error while creating post", err.message)
    next(err);
  }
})

/* PUT programming language */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await news.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating news post`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next){
  try{
    res.json(await news.remove(req.params.id))
  } catch (err) {
    console.error(`Error while deleting news post`, err.message)
  }
})

module.exports = router;
