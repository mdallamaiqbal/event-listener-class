// option 2 handle event
function makeYellow() {
    document.body.style.backgroundColor = 'yellow'
}

function makeRed() {
    document.body.style.backgroundColor = 'red'
}
// option 3 get element by id 
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function () {
    document.body.style.backgroundColor = 'blue'
}
// option 3.1 different
const btnMakePurple = document.getElementById('btn-make-purple');
//    btnMakePurple.onclick=makePurple(); function call kora jabe na sudu nam dili hobe
btnMakePurple.onclick = makePurple;

function makePurple() {
    document.body.style.backgroundColor = 'purple'
}
// option 4 add event listener
//document.getElementId().addEventListener('event type',handler)
document.getElementById('btn-make-green')
.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
});
document.getElementById('btn-make-gold')
.addEventListener('click', function () {
    document.body.style.backgroundColor = 'gold'
});