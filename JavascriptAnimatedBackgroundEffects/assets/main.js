for(let i=0; i <= 500; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.sec').appendChild(box);
}

function animateBx(){
    let boxes = document.querySelectorAll('.box');
    let num = Math.floor(Math.random() * boxes.length);
    boxes[num].classList.toggle('animate');
}
setInterval(animateBx);