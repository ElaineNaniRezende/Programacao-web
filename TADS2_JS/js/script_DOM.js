// 1. SELECIONANDO ELEMENTOS
//seleciona o elemento <h1> pelo seu id
const titulo = document.getElementById("titulo")//constante

//seleciona o elemento <p> pelo seu id
const descricao = document.getElementById("descricao")

//seleciona o elemento <button> pelo seu id
const btn = document.getElementById("btn")

//seleciona o elemento <div> pelo seu id
const area = document.getElementById("area")

//Exibe elementos selecionados no console
console.log(titulo, descricao, btn, area);

//2. ALTERANDO CONTEÚDO E ESTILO
//altera texto do elemento <h1>

titulo.textContent = "Aprendendo a mudar o texto manipular o DOM!";

//muda a cor e tamanho da fonte do parágrafo
descricao.style.color = "blue";
descricao.style.fontSize = "15pt";

//altera o fundo da página
document.body.style.backgroundColor = "lightgray";

// 3. EVENTOS: Reagiando ações do usuário
//exibir frase quando o usuário clicar no botão(evento)
btn.addEventListener("click", () => {
    //altera o texto do título
    titulo.textContent = "Isso! Curioso!";

    //altera a cor do parágrafo
    descricao.style.color = "red";

    //exibir prompt para solicitar nome do usuário
    let nomeUsuario = prompt("Qual o seu nome?");//interação
    alert("Seja bem-vindo(a), " + nomeUsuario + "! =D");

});//os eventos trabalham dentro das chaves

// 4. Imputs e respostas dinâmicas
//selecionar os elementos da seção de saudação
const nomeUsuario = document.getElementById("nomeUsuario");
const saudar      = document.getElementById("saudar");
const mensagem    = document.getElementById("mensagem");

// quando o botão for clicado para o evento
saudar.addEventListener("click", () => {
    //alterar o texto do parágrafo <p> o valor informado no input
    mensagem.textContent = "Seja bem-vindo(a), " + nomeUsuario.value + "!";

    //limpa após o clique
    nomeUsuario.value = "";

});

// 5. CRIANDO E REMOVENDO ELEMENTOS DINÂMICAMENTE
//seleciona a área onde os elementos estão adicionados
//cria um novo parágrafo
const novoParagrafo = document.createElement("p");
//adicionba parágrafo dentro da div area
novoParagrafo.textContent = "Parágrafo criado com JavaScript!";
area.appendChild(novoParagrafo);

//remover parágrafo
novoParagrafo.remove();

//6. CLASSES E ESTILOS DINÂMICOS
//Selecionar o texto e o botão
const texto     = document.getElementById("texto");
const btnClasse = document.getElementById("btnClasse");

btnClasse.addEventListener("click", () => {
    //adiciona ou remove a classe css "destaque"(se a classe existir remova e se não existir, adicione)
    texto.classList.toggle("destaque")
});

// 7. MINI PROJETO
//selecona
const inputCor = document.getElementById("corEscolhida");
const botaoCor = document.getElementById("mudarCor");
const atual    = document.getElementById("atual");

//criar evento
botaoCor.addEventListener("click", () => {
    //aplica a cor escolhida ao fundo da página
    document.body.style.backgroundColor = inputCor.value;

    atual.textContent = "Cor atual" + inputCor.value;

});



