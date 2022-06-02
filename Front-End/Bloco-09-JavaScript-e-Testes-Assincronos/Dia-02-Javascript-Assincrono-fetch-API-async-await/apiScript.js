// apiScript.js
const url = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const createDivJoke = (data) => {
  const body = document.querySelector('body');
  const joke = data.joke;
  const div = document.createElement('div');
  div.innerHTML = joke;
  body.appendChild(div);
}

const fetchJoke = () => {
  fetch(url, myObject)
    .then((response) => response.json())
    .then((data) => createDivJoke(data))
    .catch((error) => console.log(error));
};

window.onload = () => fetchJoke();
