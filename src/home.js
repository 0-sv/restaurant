import { createElement, appendDiv } from './createElement';

const home = () => {
    appendDiv(document.getElementById("content"), createElement("h1", "Nhà xúc xich"));
    appendDiv(document.getElementById("content"), createElement("p",`
                    Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Neque,
                    molestias, quis, ratione totam vero incidunt 
                    quia aliquid veritatis qui nesciunt
                    rerum sapiente nulla! Facere, quos
                    similique nostrum odio animi accusantium.`));
};

export {
    home
}