const express  = require('express')
const app = express()
const PORT = 3000
const router = require('./apiRouter.js')

app.get('/', (req, res) => {
    res.json('Nó phải như vậy')
})

app.use('/api/', router)

app.listen(PORT, () => console.log(`Server start on port:${PORT}`)) 