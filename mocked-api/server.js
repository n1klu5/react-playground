const jsonServer = require('json-server');
require('dotenv').config();
const server = jsonServer.create();
const router = jsonServer.router('mocked-api/db.json');
const middlewares = jsonServer.defaults();

const isAuthorized = (req) => {
  return req.headers.authorization === `Bearer ${process.env.VITE_API_TOKEN}`;
};

server.use(middlewares);
server.use((req, res, next) => {
  if (isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});
server.use('/api', router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
