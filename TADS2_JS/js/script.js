/*



1.TRÊS FORMAS DE EXIBIR CONTEÚDO:

console.log("JavaScript Conectado!");// aparece dentro do console

alert("gosto de tecnologias web!");//aparece por fora do console, e aparece primeiro

document.write("Este texto está inserido via Javascript")//texto aparece no documento



2. DECLARAÇÃO DE VARIÁVEIS E CONCATENAÇÃO

let nomeUsuario = "Paulinho"; //está em uso
let marcaVeiculo = "Chevrolet";
let valorProduto = "100.99";
//var valorProduto = 100.99//está fora de uso

alert(nomeUsuario + " possui um veículo " + marcaVeiculo + ". Ele colocou R$ " + valorProduto + " de gasolina.");//exibe o valor arzenado na variável, o + concatena



3. INTERAÇÃO POR MEIO DO COMANDO prompt, FUNÇÃO TYPEOF E função Number


let nomeUsuario = prompt("Qual o seu nome?");//interação
alert("Seja bem-vindo(a), " + nomeUsuario + "! =D");

let anonascimentoUsuario = Number(prompt("Em que ano vocâ nasceu?"));//Usado o Number para dizer que é numérico
alert("Se você já fez aniversário neste anonascimentoUsuario, você possui " + (2025 - anonascimentoUsuario) + " anos de idade!");//cálculo

alert("O ano informado é do tipo: " +  (typeof anonascimentoUsuario));



4. ESTRUTURA DE REPETIÇÃO COM if E else

if((2025 - anonascimentoUsuario) < 18){
    alert("Você ainda não pode acessar esse conteúdo!");
}
else{
    alert("Você está liberado para acessar esse conteúdo!");
}


5. ESTRUTURAS DE REPETIÇÃO


let indice = 1;

while(indice <= 10){//LLOP PRÉ-TESTE,   verifica se é verdadeiro para então executar
    console.log("O índice vale " + indice)
    indice++;
}


let indice = 11;

do{ //LLOP PÓS-TESTE, executa antes de verificar se é verdadeiro :D
    alert("O índice vale " + indice)
    indice++;
}while(indice < 10);


for(let indice=1; indice  <= 10; indice++){
    alert("O índice vale " + indice);
}


let frutas = ["Banana", "Maçã", "Goiaba"];//array = (vetor/matriz unidimensional)

frutas.push("Morango"); //adiciona elementos no final do Arrey
frutas.unshift("Laranja");//adiciona elementos no início do Arrey

frutas.pop();//remove elementos no final do Arrey
frutas.shift();//remove elementos no início do Arrey

let indice = frutas.indexOf("Goiaba");//retorna de um elemento no Arrey
console.log("A Goiaba está na posição " + indice + " do array.")


frutas.sort(); //ordena em ordem alfabética
frutas.reverse();//Inverte a ordem atual


for(let fruta of frutas){
    console.log(fruta);
}
 */