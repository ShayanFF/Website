var x = 0;
function randomize(){
    y = x;
    x = Math.floor(Math.random() * 3);
    var element = document.getElementById("randMess");

    while (y == x) {
        x = Math.floor(Math.random() * 3);
    }

    element.classList.add("fade-out");

    setTimeout(() => {
        if (x == 0){
            element.innerHTML = 'Programmer';
        }
    
        else if (x == 1){
            element.innerHTML = 'Software Developer';
        }
    
        else {
            element.innerHTML = 'Computer Scientist';
        }
    }, 400);
    setTimeout(()=>{element.classList.remove("fade-out")}, 400);
}