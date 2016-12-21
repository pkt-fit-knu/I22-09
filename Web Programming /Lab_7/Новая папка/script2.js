function draw() {
  console.log("123");
    // получение элемента и его графического контекста.
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // создание пути.
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(20, 40);
    context.lineTo(30, 45);
    context.lineTo(40, 50);
    context.lineTo(50, 60);
    context.lineTo(60, 80);
    context.lineTo(70, 90);
    context.lineTo(80, 95);

    context.lineTo(90, 100);
    context.lineTo(100, 105);
    context.lineTo(110, 110);
    context.lineTo(120, 130);
    context.moveTo(120,130);
    context.closePath();
    context.stroke();

    //context.clearRect(70,70,80,80);
}
