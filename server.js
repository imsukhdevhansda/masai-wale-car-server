const PORT = process.env.PORT || 3021;
const path = require("path");
const josnServer = require("json-server");
const server = josnServer.create();
const router = josnServer.router(path.join(__dirname,'db.json'));
const middlewares = josnServer.defaults();
server.use(middlewares);
server.use(josnServer.bodyParser);
server.use(router);
server.listen(PORT,()=> console.log(`Masai wale server is running on PORT${PORT}`));