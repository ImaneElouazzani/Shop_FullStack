const PORT = 4000
const express = require('express')
const cors = require('cors')
const app = express()
const mongoDBClient = require('./mongoClient')

// API Rest

const Product = require('./models/product')
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    try {
        res.send(products)
    } catch(e) {
        res.status(500).send(err)
    }
})

app.get('/products/:category', async (req, res) => {
    const category = req.params.category
    const products = await Product.find({category : category})
    try {
        res.send(products)
    } catch(e) {
        res.status(500).send(err)
    }
})

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello Express 🎉')
})

app.listen(PORT,() => {
    console.log(`Server up and running on port http://localhost:${PORT}`)
    mongoDBClient.initialize()
})