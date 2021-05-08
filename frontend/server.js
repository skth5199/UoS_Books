const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081;

app.use(express.static(path.join(__dirname, 'book-management', 'build')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'book-management/build/index.html'), function(err) {
       if (err) {
         res.status(500).send(err)
       }
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
