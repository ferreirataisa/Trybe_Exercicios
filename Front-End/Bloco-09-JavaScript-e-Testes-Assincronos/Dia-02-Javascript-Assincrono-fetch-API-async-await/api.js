const treatData = (data) => {
  const filtred = data.filter((element) => element.rank <= 10)
  // const filtred = data.filter(({rank}) => rank <= 10)
  const treatedValues = filtred.map(({name, priceUsd, symbol}) => ({name, priceUsd, symbol}));
  const body = document.querySelector('body');
  
  treatedValues.forEach(({name, priceUsd, symbol}) => {
    const div = document.createElement('div')
    div.innerHTML = `A moeda ${name} que tem o preço em dolar ${priceUsd} e que tem o simbolo ${symbol}`
    body.appendChild(div)
  })
}

const getApi = async () => {
  try {
    Promise.all
    const moedas = await fetch('https://api.coincap.io/v2/assets')
    const cambio = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    const dados = await response.json()
    treatData(dados.data)
  } catch (error) {
    console.log(error)
  }
}

getApi()

