const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1.textContent);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML="patito"

h1.getAttribute("class");
h1.setAttribute("class","rojo")
h1.classList.add("amarillo")
h1.classList.remove("rojo")

const img= document.createElement('img')

img.setAttribute('src',"./dedetroid.jpg");

console.log(img)

pid.append(img);