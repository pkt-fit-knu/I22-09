// Установка стандартного express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// Chatroom

var numUsers = 0;

io.on('connection', function (socket) {
  var addedUser = false;

  // Когда пользователь пишет 'new message', слушает
  socket.on('new message', function (data) {
    //  'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // Когда пользователь 'add user'
  socket.on('add user', function (username) {
    if (addedUser) return;

    // Мы присваевакм username в сессии socket 
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo глобально (для всех) юхер присоеденился
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // Когда клиент пишет emits 'typing', broadcast всем остальным юзерам
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // Когда клиент пересиал emits 'stop typing', всем остальным юзерам
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // Если пользователь отсойединся.. уведомить его
  socket.on('disconnect', function () {
    if (addedUser) {
      --numUsers;

      // echo глобально юзер ушол
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});
