import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';
import "./style.css";

home();

document.getElementById("home").addEventListener("click", (e) => {
    home();
});

document.getElementById("menu").addEventListener("click", (e) => {
    menu();
});

document.getElementById("contact").addEventListener("click", (e) => {
    contact();
});