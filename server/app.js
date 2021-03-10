const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080;
const API_KEY = '18887902-0fdc199cd166c9d026e3f4b76';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  try {
    const axiosRes = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=sweden+landmark&image_type=photo&category=places&safesearch=true`);
    res.json({ url: axiosRes.data.hits[2].largeImageURL });
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
