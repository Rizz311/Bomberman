alert("MOVE BOMBERMAN");

//what can user do?
//press keys

//what does user expect?
//for bomberman to move in direction of key pressed

//what does user see?
//bomberman moving

document.getElementById("bomber").onkeypress=keyPressed;

document.onkeydown = keyPressed;


var bombermanLeft= 0;
var bombermanTop= 0;

    function keyPressed(e){
          if (e.keyCode == 39){
            bombermanLeft+=4;
            bomberman.style.left = bombermanLeft + 'px';

    } else if (e.keyCode == 37){
      bombermanLeft-=4;
      bomberman.style.left = bombermanLeft + 'px';

    } else if (e.keyCode == 40){
          bombermanTop+=4;
          bomberman.style.top = bombermanTop + 'px';

      }else if (e.keyCode == 38){
            bombermanTop-=4;
            bomberman.style.top = bombermanTop + 'px';

        }
  }
