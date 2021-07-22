const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const DIST_PATH = '/dist';

app.use(express.static(`${__dirname}${DIST_PATH}`));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}${DIST_PATH}/index.html`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
