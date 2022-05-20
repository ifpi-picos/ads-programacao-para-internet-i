function primeiraFuncao() {
  setTimeout(function () {
    console.log('a')
  }, Math.random() * 2000)
}
function segundaFuncao() {
  setTimeout(function () {
    console.log('b')
  }, Math.random() * 2000)
}
function terceiraFuncao() {
  setTimeout(function () {
    console.log('c')
  }, Math.random() * 2000)
}


function getNome(callback) {
  setTimeout(() => {
    return callback('Nome');
  }, Math.random() * 2000);
}

function getSobreNome(callback) {
  setTimeout(() => {
    return callback('Sobrenome');
  }, Math.random() * 2000);
}