const app = require('express')();
const cors = require('cors');
const server = require('http').Server(app);
const port = process.env.PORT || 3000;

const SERVER_DIR = __dirname;
const CLIENT_DIR = `${SERVER_DIR}/../client`;

app.use(
  '*',
  cors({
    origin: 'http://localhost:3001',
  }),
);

app.get('/api/movies', (request, response) => {
  const options = {
    root: SERVER_DIR,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  response.sendFile(`/data/movies.json`, options);
});

app.get('/', (request, response) => {
  const options = {
    root: CLIENT_DIR,
    headers: {
      'Cache-Control': 'max-age=1800',
    },
  };
  response.sendFile('index.html', options);
});

app.get('/:filename(app.js|style.css)', (request, response) => {
  const options = {
    root: CLIENT_DIR,
    headers: {
      'Cache-Control': 'max-age=1800',
    },
  };
  response.sendFile(request.url, options);
});

server.listen(port, err => {
  if (err) {
    return console.log(err);
  }
  console.log(`[ OK ] App is available on port: ${port}`);
});
