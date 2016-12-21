        function draw() {
          console.log("123");
            // получение элемента и его графического контекста.
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");

            // создание пути.
            context.beginPath();
            context.moveTo(10, 10);
            context.lineTo(20, 20);
            context.lineTo(20, 30);
            context.lineTo(30, 20);
            context.lineTo(20, 40);
            context.lineTo(40, 20);
            context.lineTo(20, 50);
            context.lineTo(50, 20);

            // черчение линии на холсте.
            context.stroke();
        }
