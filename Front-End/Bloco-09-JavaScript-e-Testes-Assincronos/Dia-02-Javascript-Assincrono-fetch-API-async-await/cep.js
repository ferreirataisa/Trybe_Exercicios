// - capturar o botão
// - addEventListener
// - capturar o valor do input
// - fazer o fetch usando valor capturado
// - tratar o response (criando objeto)
// - tratar o json 

const appendInfo = (info) => {
    const infoToAppend = `UF: ${info.uf} | Localidade: ${info.localidade}`
    const resultsTextArea = document.querySelector('.classeDaDiv');
    resultsTextArea.innerHTML = infoToAppend;

}

const fetchCep = async (cep) => {
    const url = 'endereço da URL'
    const response = await fetch(url);
    // console.log(response);
    const json = await response.json();
}

const searchButton = document.querySelector('classeDoBotão')
searchButton.addEventListener('click', () => {
    // console.log('click')
    const inputValue = document.querySelector('classeDoInput').value;
    // console.log(inputValue);
    fetchCep(inputValue);
})