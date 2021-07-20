const express = require('express');

app = express();

const port = 8085;

app.use('/api/v1/kasi', (req, res) => {
    res.send(`Hello Kasii...`)
})

app.listen(port, ()=> {
    console.log(`Server is connected to ${port}...`);
})