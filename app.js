const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const middlewares = require('./middlewares/middlewares')
const mongoose = require('mongoose')
const posts = require('./api/posts')
const categories = require('./api/categories')
const rateLimit = require('express-rate-limit')

require('dotenv').config()

const limiter = rateLimit({
    windowMs: 15 * 1000, // 15 seconds
    max: 10, // limit each IP to 10 requests per 15s
})

const app = express()

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(morgan('common'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello there 🌧',
    })
})
app.use('/api/v1', limiter)
app.use('/api/v1/posts', posts)
app.use('/api/v1/categories', categories)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

const port = process.env.PORT || 1337
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
