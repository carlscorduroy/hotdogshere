var i = 0;
var txt = 'hotdogs --here';
var speed = 100;

function bootRoutine() {
  if (i < txt.length) {
    document.getElementById("console").innerHTML += txt.charAt(i);
    i++;
    setTimeout(bootRoutine, speed);
  }
}
