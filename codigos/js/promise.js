const nomes = ["Steve", "Bill", "Linus", "Ada", "Grace", "Turing"];
const usuarios = new Map();

usuarios.set(nomes[0], "EUA");
usuarios.set(nomes[1], "EUA");
usuarios.set(nomes[2], "Finlândia");
usuarios.set(nomes[3], "Inglaterra");
usuarios.set(nomes[4], "EUA");
usuarios.set(nomes[5], "Inglaterra");

function getNomePorIndexPromise(index) {
  console.log("Promise::aguarde...buscando no banco de dados...");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (index >= 0 && index < nomes.length) {
        resolve(nomes[index]);
      } else {
        reject("Nome não encontrado");
      }
    }, Math.random() * 2000);
  });
}

function getNacionalidadeDePromise(nome) {
  console.log("Promise::aguarde...buscando no banco de dados...");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const nacionalidade = usuarios.get(nome)
      if (nacionalidade) {
        resolve(nacionalidade);
      } else {
        reject("Usuário não encontrado");
      }
    }, Math.random() * 2000);
  });
}

(async function init() {
  const nome = await getNomePorIndexPromise(0);
  const nacionalidade = await getNacionalidadeDePromise(nome);
  console.log(nome + ': ' + nacionalidade)
})()



// getNomePorIndexPromise(0).then((nome) => {
//   getNacionalidadeDePromise(nome).then((nacionalidade) => {
//     console.log(nome + ': ' + nacionalidade)
//   })
// }).catch((erro) => {
//   console.error('Error: ', erro)
// })