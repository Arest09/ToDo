const Router = require('express')
const router = new Router()
const {createItem,getItem,deleteItem,changeItem,checkItem,important,isDone} = require('../controllers/list.controller');

router.get('/',getItem)
router.post('/',createItem)
router.delete('/:id',deleteItem)
router.put('/:id',changeItem)
router.put('/check/:id',checkItem)
router.get('/important',important)
router.put('/isCheckDone/:id',isDone)

module.exports = router;

