//Craeting a game

//Animation 1
const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext('2d');

const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5, //Change of position on x axis
    dy: 4, //change of posiions on y axis
};

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();

    //changePosition
    circle.x += circle.dx;
    circle.y += circle.dy;

    //Detect Side walls
    if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dx *= -1;
    }

    //Detect top and bottom walls
    if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1;
    }
    requestAnimationFrame(update);
}

update();