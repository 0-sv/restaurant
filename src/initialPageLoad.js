const createElement = (type, text) => {
    const newElement = document.createElement(type);
    newElement.innerHTML = text;
    return newElement;
}

export {
    createElement
}