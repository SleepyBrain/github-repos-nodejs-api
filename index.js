const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', async (req, res) => {
  const username = req.query.username || 'myogeshchavan97';
  try {
    const result = await axios.get(
      `https://restcountries.com/v3.1/region/europe`
    );
    // const repos = result.data
    //   .map((repo) => ({
    //     name: repo.name,
    //     url: repo.html_url,
    //     description: repo.description,
    //     stars: repo.stargazers_count
    //   }))
    //   .sort((a, b) => b.stars - a.stars);

    res.send(result.data);
  } catch (error) {
    res.status(400).send('New error while getting list of repositories. ' + error);
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
