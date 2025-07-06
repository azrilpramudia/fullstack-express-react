const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes')
const app = express()
const port = 3000;

// use body parser
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// use cors
app.use(cors())

//route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', router);

// start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})