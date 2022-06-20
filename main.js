let result = document.getElementById("result");
let cpf = document.getElementById("cpf");

function clicar() {
  console.log(cpf);
  result.innerHTML = cpf.value;
}

function limpar() {
  result.innerHTML = "";
  cpf.value = "";
}
