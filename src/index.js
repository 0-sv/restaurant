import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';
import "./style.css";

document.getElementById("home").addEventListener("click", (e) => {
    if (e.preventDefault) {
        e.preventDefault();
    }
    home();
});

document.getElementById("menu").addEventListener("click", (e) => {
    if (e.preventDefault) {
        e.preventDefault();
    }
    menu();
});

document.getElementById("contact").addEventListener("click", (e) => {
    if (e.preventDefault) {
        e.preventDefault();
    }
    contact();
});