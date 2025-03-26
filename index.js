import "./index.css";
import logo from './assets/JavaScript_logo.png'


console.log(logo);

const title = document.createElement('h1');
title.textContent = 'I love JavaScript';
document.body.append(title);

const image = document.createElement('img');
image.src = logo;
document.body.append(image);