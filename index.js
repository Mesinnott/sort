let express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  // routes = require('./server-assets/routes/index'),
  // handlers = require('./utils/handlers'),
  server = express(),
  http = require('http').Server(server);
  // io = require('socket.io')(http),
  port = process.env.PORT || 1582;

// comment out- routes, handlers, and io
//added folder public, sort, and put all of "app" inside it.

//Registers Middleware for server
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use('/', express.static(`${__dirname}/public/sort/`));
server.use('/api', cors(handlers.corsOptions), routes.router)
server.use('/', handlers.defaultErrorHandler)



server.get('/', function(req, res){
  res.sendfile('index.html')
});



// io.on('connection', function(socket){
//   console.log('a user connected');

//   setInterval(() =>{
//     io.emit('update', 'the time is: ' + new Date().getTime());
//   }, 10000);
// });


http.listen(port, function () {
  console.log(`Creating worlds on port: ${port}`);
})

