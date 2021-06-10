const http = require('http');

const server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>The server is working!</h1>');
    response.end();
});
// const server = http.createServer();
server.listen(8000);

var io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
        credentials: true
      }
});

let totalMembers = 0;
// define interactions with client
io.sockets.on('connection', (socket) => {

    // //emit total members
    // totalMembers++;
    // socket.emit('members', totalMembers);
    
    // // set socket for chat
    socket.on(
        'chat',
        (msg) => {
            io.emit('chat', socket.id+" : "+ msg);
        }
    )

});
