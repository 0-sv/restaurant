import { createElement, appendDiv, clearDiv } from './createElement';

const menu = () => {
    const content = document.getElementById("content");
    clearDiv(content);
    appendDiv(content, createElement("h1", "Nhà xúc xich - menu"));
    appendDiv(content, createElement("p",`
                    Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Neque,
                    molestias, quis, ratione totam vero incidunt 
                    quia aliquid veritatis qui nesciunt
                    rerum sapiente nulla! Facere, quos
                    similique nostrum odio animi accusantium.`));
};

export {
    menu
}