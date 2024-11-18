alert("Boas vindas ao nosso site!");

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

console.log("nome", nome)
console.log("idade", idade)
console.log("numeroDeVendas", numeroDeVendas)
console.log("saldoDisponivel", saldoDisponivel)

let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro)

let nomeUsuario = prompt("Informe seu nome")
console.log(nomeUsuario)

let idadeMinimaTirarHabilitacao = 18
let idadeUsuario = prompt("Informe sua idade")
console.log(idadeUsuario)

if (idadeUsuario >= idadeMinimaTirarHabilitacao) {
    alert("Pode tirar a habilitação!")
}
