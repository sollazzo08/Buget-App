const serverApp = require('./app');

const port = process.env.PORT || 5050;

serverApp.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
