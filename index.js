const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json())

// -- port test
app.listen(
    PORT,
    console.log(`listening on ${PORT}`)
)

// -- get route
app.get('/shoes', (req, res) => {
    res.status(200).send({
        shoes: 'Running',
        size: 'infant'
    })
});

app.post('/shoes/:id', (req, res) => {
    const { id } = req.params;
    const { size } = req.body;

    if (!size) {
        res.status(404).send({ message: 'Size needed' })
    }

    res.send({
        shoes: `Baby Shoes! ${size} `
    });
});