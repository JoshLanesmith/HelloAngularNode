const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/data', (req, res) => {
    const data = {
        message: 'Hello Angular Node!'
    }

    res.json(data);
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});