const mapaUFCidades = new Map()
mapaUFCidades.set('PI', ['Picos', 'Inhuma', 'Teresina'])
mapaUFCidades.set('PE', ['Petrolina', 'Recife'])
mapaUFCidades.set('DF', ['Gama', 'Brasília'])

window.addEventListener('click', () => {
  alert('oi')
})

const selectUF = document.querySelector('#uf')
const selectCidade = document.querySelector('#cidade')
const button = document.querySelector('button')

const accordionH3 = document.querySelector('h3')
accordionH3.addEventListener('click', () => {
  const texto = document.querySelector('.texto')
  if (texto.classList.contains('oculto')) {
    texto.classList.remove('oculto')
    texto.classList.add('exibe')
  } else {
    texto.classList.remove('exibe')
    texto.classList.add('oculto')
  }
})


button.addEventListener('click', () => {
  if (selectUF.value == '' || selectCidade.value == '') {
    alert('Preencha os campos')
    return
  }
  const divMsg = document.querySelector('.msg')
  divMsg.innerHTML = '<p>Salvo com sucesso!<p>'
  const p = document.createElement('p')
  p.textContent = `UF: ${selectUF.value} - Cidade: ${selectCidade.value}`
  divMsg.appendChild(p)
  const span = document.createElement('span')
  span.textContent = 'X'
  span.classList.add('remove')
  divMsg.appendChild(span)
  if (divMsg.classList.contains('oculto')) {
    divMsg.classList.remove('oculto')
    divMsg.classList.add('flex')
  }
  span.addEventListener('click', () => {
    divMsg.innerHTML = ''
    divMsg.classList.remove('flex')
    divMsg.classList.add('oculto')
  })
})


selectUF.addEventListener('change', () => {
  const ufSelecionada = selectUF.value
  const cidades = getCidadesDaUFSelecionada(ufSelecionada)
  limpaSelectDeCidades()
  preencheSelectDeCidades(cidades)
})

function preencheSelectDeCidades(cidades) {
  cidades.forEach(cidade => {
    const option = document.createElement('option')
    option.value = cidade
    option.text = cidade
    selectCidade.appendChild(option)
  })
}

function limpaSelectDeCidades() {
  selectCidade.innerHTML = ''
}

function getCidadesDaUFSelecionada(ufSelecionada) {
  return mapaUFCidades.get(ufSelecionada)
}


