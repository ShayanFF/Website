
    var x = 0;
function randomize(){
    y = x;
    x = Math.floor(Math.random() * 3);
    while (y == x) {
        x = Math.floor(Math.random() * 3);
    }

    if (x == 0){
        document.getElementById('randMess').innerHTML = 'Programmer';
    }

    else if (x == 1){
        document.getElementById('randMess').innerHTML = 'Software Developer';
    }

    else {
        document.getElementById('randMess').innerHTML = 'Computer Scientist';
    }
}