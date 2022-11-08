DOCUMENTATION

To create the bouincing ball Canavas App we followed the following steps :

1. First of all we need a html , css and Javascript files.

2. We use the canvas html element in the html document and attach a height and width that would be referenced as the canvas.width and canvas.height.
   -> <canvas id="canvas" width="600" height="500"></canvas>

3. In the javascript file, we select the canvas element using the ID.
   -> const canvas = document.querySelector('#canvas');

4. Create a context for the canvas element to specify wheter we will be doing 2d or 3d drawings and attach it to a variable (The normal convention is to name it 'ctx')
   -> const ctx = canvas.getContext('2d');

5. The main objective of this project is to create a bouncing ball. So first we need to create a ball object to specify all the properities we need for ball. such as:
   x: center on the x-axis
   y: center on the y-axis
   size: radius
   dx: change in the x-axis
   dy: change in the y-axis

6. We need to create a drawCircle function that we would call later. This function basically draws the ball.
   a. In the function we need to first call the beginPath() method on our context to initalize drawing process
   b. Then we call the arc method, This is what actually draws the circle with our specified paramenters that will be gotten from the ball object.
   ctx.arc(centerX, centerY, radius, start Angle(usually 0), end Angle, antiClockwise);

   EndAngle:
   i. Math.PI \* 2: For a full circle
   ii. Math.PI: For a half circle

   antiClockwise:
   i. This accepts a boolean value. this is optional for a full circle.

   c. Then we call the fillStyle() method to specify the color to fill the circle with. we can also use the strokeStyle() method as an alternative.

   d. Here we actually call the fill() or stroke() methods to actually fill or stroke the object

7. We need to create an update function which handles the movement of the the ball.
   a. First of all we need to clear any preexisting occurance of the ball from the page. and we do that using the clearRect() method on the context.
   ctx.clearRect(startX, startY, endX, endY).

b. We call the drawCircle() function.

c. We change the position of the ball based on the dx and dy values from our ball object.
circle.x += circle.dx;
circle.y += circle.dy;

d. We also need to dectect for collision. Without this, the ball goes outside the canvas. which isnt supposed to be so.
so we first detect for side walls then top and bottom walls

e. We call the inbuilt requestAnimationFrame() which accepts a callBack function as a parameter. Here we will use the update function as the callback function. This makes sure the update() function is repeatedly called.

8. Finally we call the update() function
