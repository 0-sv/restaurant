const createElement = (type, text) => {
    const newElement = document.createElement(type);
    newElement.innerHTML = text;
    return newElement;
}

const appendDiv = (div, element) => {
    div.appendChild(element);
}

export {
    createElement,
    appendDiv
}