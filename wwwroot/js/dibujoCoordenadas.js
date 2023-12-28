window.drawPoint = function(x, y) {
    var canvas = document.getElementById('coordenadasCanvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
}

function dibujarRectaEnCanvas(x1, y1, x2, y2, canvasId) {
    // Obtener el elemento canvas y su contexto 2D
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');

    // Configurar el estilo de la línea (color, ancho, etc.)
    ctx.strokeStyle = 'black'; // Color de la línea
    ctx.lineWidth = 2; // Grosor de la línea

    // Dibujar la recta
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Mover el lápiz al punto de inicio
    ctx.lineTo(x2, y2); // Dibujar una línea al punto final
    ctx.stroke(); // Renderizar la línea
}

function dibujarRectaEnCanvas(x1, y1, x2, y2, x3, y3, x4, y4, canvasId) {
    // Obtener el elemento canvas y su contexto 2D
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');

    // Configurar el estilo de la línea para las rectas (color, ancho, etc.)
    ctx.strokeStyle = 'black'; // Color de la línea
    ctx.lineWidth = 2; // Grosor de la línea

    // Dibujar la primera recta
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Mover el lápiz al punto de inicio
    ctx.lineTo(x2, y2); // Dibujar una línea al punto final
    ctx.stroke(); // Renderizar la línea

    // Dibujar la segunda recta
    ctx.beginPath();
    ctx.moveTo(x3, y3); // Mover el lápiz al punto de inicio
    ctx.lineTo(x4, y4); // Dibujar una línea al punto final
    ctx.stroke(); // Renderizar la línea

    // Calcular las coordenadas del punto de intersección
    var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denom !== 0) {
        var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
        var x = x1 + ua * (x2 - x1);
        var y = y1 + ua * (y2 - y1);

        // Dibujar el punto de intersección en verde
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Llamar al método para dibujar una recta en un canvas con ID 'miCanvas1'
// dibujarRectaEnCanvas(100, 100, 300, 300, 'miCanvas1');

// Llamar al método para dibujar otra recta en un canvas con ID 'miCanvas2'
// dibujarRectaEnCanvas(200, 200, 400, 400, 'miCanvas2');

// window.onload = function() {
//     var canvas = document.getElementById('coordenadasCanvas');
//     var ctx = canvas.getContext('2d');

//     // Dibujar el eje x
//     ctx.beginPath();
//     ctx.moveTo(0, canvas.height / 2);
//     ctx.lineTo(canvas.width, canvas.height / 2);
//     ctx.stroke();

//     // Dibujar el eje y
//     ctx.moveTo(canvas.width / 2, 0);
//     ctx.lineTo(canvas.width / 2, canvas.height);
//     ctx.stroke();

//     // Función para dibujar un punto en las coordenadas (x, y)
//     function dibujarPunto(x, y) {
//         ctx.beginPath();
//         ctx.arc(x, y, 3, 0, 2 * Math.PI);
//         ctx.fillStyle = 'blue';
//         ctx.fill();
//     }

//     // Ejemplo: Dibujar un punto en las coordenadas (100, 100)
//     dibujarPunto(100, 100);

//     // Handle para dibujar un punto en las coordenadas del clic del ratón
//     canvas.addEventListener('click', function(event) {
//         var rect = canvas.getBoundingClientRect();  // Obtener las posiciones del lienzo
//         var x = event.clientX - rect.left;  // Coordenada x del clic
//         var y = event.clientY - rect.top;   // Coordenada y del clic
//         dibujarPunto(x, y);  // Dibujar el punto en las coordenadas del clic
//     });
// }