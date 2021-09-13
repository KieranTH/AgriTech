const express = require('express');
const router = express.Router();
const clusters = require('../Services/Clusters');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await clusters.getMultiple());
  } catch (err) {
    console.error(`Error while getting clusters `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next){
  try{
    res.json(await clusters.create(req.body));
  } catch (err)
  {
    console.error("Error while creating cluster", err.message)
    next(err);
  }
})

/* PUT programming language */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await clusters.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating cluster`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next){
  try{
    res.json(await clusters.remove(req.params.id))
  } catch (err) {
    console.error(`Error while deleting cluster`, err.message)
  }
})

module.exports = router;
