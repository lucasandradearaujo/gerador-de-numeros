const inicio = document.querySelector('#inicio')
const fim = document.querySelector('#fim')
const gerar = document.querySelector('#gerar')
const numeroElement = document.querySelector('#result')

gerar.addEventListener('click', () => {
    console.log(inicio.value)
    console.log(fim.value)
    let result = document.createElement('h3')
    result.innerText = createNum(inicio.value, fim.value)
    numeroElement.appendChild(result)
})

function createNum(inicio, fim) {
    inicio = Math.ceil(inicio);
    fim = Math.floor(fim);
    const num = Math.floor(Math.random() * (fim - inicio)) + inicio;
    return num
}

function _click(){
    document.getELementById('result').remove();
 }
