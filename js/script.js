// document.getElementById

let val;

val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;

document.getElementById('document-title').style.background = '#333';
document.getElementById('document-title').style.color = '#ffffff';
document.getElementById('document-title').style.paddingLeft = '10px';
document.getElementById('document-title').innerText = 'Hello';
document.getElementById('document-title').innerHTML = '<i>Hello</i>';


val = document.getElementById('document-title');

val.innerText = "ha ha ha haaaa....";


val = document.querySelector('ul li');

console.log(val);