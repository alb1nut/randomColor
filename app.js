const button = document.querySelector('button');

function randomColors (){
    let a = Math.floor(Math.random()*255).toString();
    let b = Math.floor(Math.random()*255).toString();
    let c = Math.floor(Math.random()*255).toString();
   let color = `rgb(${a},${b},${c})`;
    return color;
}

button.addEventListener('click', function(){
    button.style.padding = '20px 30px';
    button.style.fontSize = '1.5rem';
    button.style.backgroundColor =randomColors();
    let body = document.querySelector("body");
    body.style.backgroundColor = randomColors();
    const h1 =document.querySelector('h1');
    h1.innerText = randomColors().toString();
    h1.style.fontSize= '4rem';
})

