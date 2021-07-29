const express  = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json('Router is Runing')
})

router.get('/category', (req, res) => {
    res.json('Category')
})

router.get('/product', (req, res) => {
    res.json('Product')
})

module.exports = router