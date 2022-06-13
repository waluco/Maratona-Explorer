// procura o id resposta no html e atribui à variável respostaElemento
const respostaElemento = document.querySelector("#resposta")
 
//
const inputPergunta = document.querySelector("#inputPergunta")

//buttonPerguntar.setAttribute("disabled", true);
 
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

function fazerPergunta(){
  //console.log(inputPergunta.value)
  if(inputPergunta.value == ""){
    alert("Digite sua pergunta")
    return
  } 
 
  const pergunta = "<div>" + inputPergunta.value + "</div>"
  const totalRespostas =  respostas.length
  // gerar número aleatório
  const numeroAleatorio = Math. floor(Math.random() * totalRespostas)
 
  //console.log(respostas[numeroAleatorio])
 
  // Insere a resposta gerada pelo número aleatório no html na posição do id resposta
  respostaElemento.innerHTML = pergunta + respostas[numeroAleatorio]
 
  respostaElemento.style.opacity = 1;
 
  // Sumir resposta depois de 3 segundos.
  setTimeout(function(){
  respostaElemento.style.opacity = 0;
  //buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}
 
 
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandom(10, 20))
 
 
 
/* function getRandom() {
  return Math.random();
}
console.log(getRandom(0, 1)) */
