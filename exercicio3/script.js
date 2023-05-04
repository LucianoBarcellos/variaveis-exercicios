let nome = prompt('digite seu nome completo');
const nascimento = Number(prompt('dd/mm/aa'));
let endereco = prompt('seu endereco');
const cpf = Number(prompt('seu cpf'));
let escolaridade = prompt('qual sua escolaridade?');
let cnh = prompt('voce possui cnh?');
let filhos = Number(prompt('tem quantos filhos?'));
let cargoAtual = prompt('qual seu cardo atual;');
let salario = Number(prompt('qual e seu salario?'))
let recebe = confirm('receber comissao?');
let anoDeAdmissao = Number(prompt('qual foi o ano da sua admissao?'));

console.log(nome,nascimento,cpf,escolaridade,cnh,filhos,cargoAtual,recebe,anoDeAdmissao)
console.log(typeof nome)
console.log(typeof nascimento)
console.log(typeof endereco)
console.log(typeof cpf)
console.log(typeof escolaridade)
console.log(typeof cnh)
console.log(typeof filhos)
console.log(typeof cargoAtual)
console.log(typeof salario)
console.log(typeof recebe)
console.log(typeof anoDeAdmissao)


