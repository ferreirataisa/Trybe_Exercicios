// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', metodo);

function metodo(event) {
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', metodo);

INPUT_TEXT.addEventListener('keypress', letra);

function letra(event2) {
    const caractere = event.key;
    if (caractere !== 'a') {
    event2.preventDefault();
    }
}
