$(function() {
  var FADE_TIME = 150; // ms
  var TYPING_TIMER_LENGTH = 400; // ms
  var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

  // Инициализируем переменные
  var $window = $(window);
  var $usernameInput = $('.usernameInput'); // Input for username
  var $messages = $('.messages'); // Messages area
  var $inputMessage = $('.inputMessage'); // Input message input box

  var $loginPage = $('.login.page'); // The login page
  var $chatPage = $('.chat.page'); // The chatroom page

  // Подсказки для username
  var username;
  var connected = false;
  var typing = false;
  var lastTypingTime;
  var $currentInput = $usernameInput.focus();

  var socket = io();

  function addParticipantsMessage (data) {
    var message = '';
    if (data.numUsers === 1) {
      message += "Ты пока один(";
    } else {
      message += "У нас пополнение, теперь ты не один) тута " + data.numUsers + " участника";
    }
    log(message);
  }

  // Задаем имя клиента
  function setUsername () {
    username = cleanInput($usernameInput.val().trim());

    // Проверка на действительность имени пользователя
    if (username) {
      $loginPage.fadeOut();
      $chatPage.show();
      $loginPage.off('click');
      $currentInput = $inputMessage.focus();

      // Отправка на сервер вашего Username
      socket.emit('add user', username);
    }
  }

  // Отправка сообщения в чат
  function sendMessage () {
    var message = $inputMessage.val();
    // Очистка поля ввода
    message = cleanInput(message);
    // Если поле ввода непустое проезвести подключение
    if (message && connected) {
      $inputMessage.val('');
      addChatMessage({
        username: username,
        message: message
      });
      // Сказать серверу выподнить 'new message' и отправит параметр
      socket.emit('new message', message);
    }
  }

  // Лог сообщения
  function log (message, options) {
    var $el = $('<li>').addClass('log').text(message);
    addMessageElement($el, options);
  }

  // Добавляет визуальный чат
  function addChatMessage (data, options) {
    // Не показ сообщение, если 'X' печатает
    var $typingMessages = getTypingMessages(data);
    options = options || {};
    if ($typingMessages.length !== 0) {
      options.fade = false;
      $typingMessages.remove();
    }

    var $usernameDiv = $('<span class="username"/>')
      .text(data.username)
      .css('color', getUsernameColor(data.username));
    var $messageBodyDiv = $('<span class="messageBody">')
      .text(data.message);

    var typingClass = data.typing ? 'typing' : '';
    var $messageDiv = $('<li class="message"/>')
      .data('username', data.username)
      .addClass(typingClass)
      .append($usernameDiv, $messageBodyDiv);

    addMessageElement($messageDiv, options);
  }

  // Добавляет набор сообщение в визуальный чат
  function addChatTyping (data) {
    data.typing = true;
    data.message = 'is typing';
    addChatMessage(data);
  }

  // Удаляет сообщения после набра в визуальном чате
  function removeChatTyping (data) {
    getTypingMessages(data).fadeOut(function () {
      $(this).remove();
    });
  }

  // Добавляет элемент сообщени к сообщениям и прокручивается на дно
  // el - Элемент для добавления вида сообщения
  
  function addMessageElement (el, options) {
    var $el = $(el);

    // установить стандартные настройки
    if (!options) {
      options = {};
    }
    if (typeof options.fade === 'undefined') {
      options.fade = true;
    }
    if (typeof options.prepend === 'undefined') {
      options.prepend = false;
    }

    // Применить параметры
    if (options.fade) {
      $el.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
      $messages.prepend($el);
    } else {
      $messages.append($el);
    }
    $messages[0].scrollTop = $messages[0].scrollHeight;
  }

  // Предотврвщение захода текста на разметку
  function cleanInput (input) {
    return $('<div/>').text(input).text();
  }

  // Обновления события набора текста
  function updateTyping () {
    if (connected) {
      if (!typing) {
        typing = true;
        socket.emit('typing');
      }
      lastTypingTime = (new Date()).getTime();

      setTimeout(function () {
        var typingTimer = (new Date()).getTime();
        var timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
          socket.emit('stop typing');
          typing = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  }

  // Получить 'X is typing' сообщения от пользователя
  function getTypingMessages (data) {
    return $('.typing.message').filter(function (i) {
      return $(this).data('username') === data.username;
    });
  }

  // Получает цвет имени пользователя через нашу хэш-функции
  function getUsernameColor (username) {
    // Вычисление hash code
    var hash = 7;
    for (var i = 0; i < username.length; i++) {
       hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Подсчет color
    var index = Math.abs(hash % COLORS.length);
    return COLORS[index];
  }

  // Keyboard events

  $window.keydown(function (event) {
    // Авто-фокус текущего входа, когда key набирается
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      $currentInput.focus();
    }
    // Нажатие на Enter
    if (event.which === 13) {
      if (username) {
        sendMessage();
        socket.emit('stop typing');
        typing = false;
      } else {
        setUsername();
      }
    }
  });

  $inputMessage.on('input', function() {
    updateTyping();
  });

  // Click events

  // Курсор на input когда нажимаеш куда либо на login page
  $loginPage.click(function () {
    $currentInput.focus();
  });

  // Курсор на input когда нажимаеш куда либо на message input's border
  $inputMessage.click(function () {
    $inputMessage.focus();
  });

  // Socket events

  // Кргда либо сервер emits 'login', log the login message
  socket.on('login', function (data) {
    connected = true;
    // Отобразить окно приветствия
    var message = "Добро пожаловать в чатик на Socket.IO ";
    log(message, {
      prepend: true
    });
    addParticipantsMessage(data);
  });

  // Whenever the server emits 'new message', обновить тело chat
  socket.on('new message', function (data) {
    addChatMessage(data);
  });

  // Whenever the server emits 'user joined', log it in the chat body
  socket.on('user joined', function (data) {
    log(data.username + ' joined');
    addParticipantsMessage(data);
  });

  // Whenever the server emits 'user left', log it in the chat body
  socket.on('user left', function (data) {
    log(data.username + ' left');
    addParticipantsMessage(data);
    removeChatTyping(data);
  });

  // Whenever the server emits 'typing', показывать набор message
  socket.on('typing', function (data) {
    addChatTyping(data);
  });

  // Whenever the server emits 'stop typing', удалить message
  socket.on('stop typing', function (data) {
    removeChatTyping(data);
  });

  socket.on('disconnect', function () {
    log('you have been disconnected');
  });

  socket.on('reconnect', function () {
    log('you have been reconnected');
    if (username) {
      socket.emit('add user', username);
    }
  });

  socket.on('reconnect_error', function () {
    log('attempt to reconnect has failed');
  });

});
