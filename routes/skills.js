const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skills')


router.get('/', skillController.index)


router.get('/:id', skillController.show)

router.get('/:id/edit', skillController.edit);
// POST /todos
router.post('/', skillController.create);
// DELETE /todos/:id
router.delete('/:id', skillController.delete);
// PUT /todos/:id
router.put('/:id', skillController.update);


module.exports = router;