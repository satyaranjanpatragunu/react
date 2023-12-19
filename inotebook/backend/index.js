 const connectToMongo=require('./db');
 connectToMongo();
const express = require('express')
const app = express()
const port = 3001

//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get('/', (req, res) => {
    console.log("test");
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})