//Selecionar o formulário e o parágrafo de mensagens
const form         = document.getElementById("formUsuario");
const mensagemForm = document.getElementById("mensagemForm");

//adiciona evento de "submit"
form.addEventListener("submit", (erroPreenchimento) => {
    erroPreenchimento.preventDefault();//impede o envio automático( recarregand a página)

    //captura os valores digitados e remover espaços extras
    const nomeUsuario = document.getElementById("nomeUsuario").value.trim();
    const emailUsuario = document.getElementById("emailUsuario").value.trim();
    const senhaUsuario = document.getElementById("senhaUsuario").value.trim();

    //verificar se todos os campos doram preenchidos
    if(nomeUsuario === "" || emailUsuario === "" || senhaUsuario === ""){
        mensagemForm.textContent = "Atenção! Todos os campos são obrigatórios!";
        mensagemForm.style.color = "red";
    }
    //verificar tamanho mínimo da senha
    else if(senhaUsuario.length < 6){
        mensagemForm.textContent = "A senha deve possuir ao menso 6 caracteres!";
        mensagemForm.style.color = "orange";
    }
    //verificar se o email possui "@"
    else if(!emailUsuario.includes("@")){
        mensagemForm.textContent = "Digite um email válido!";
        mensagemForm.style.color = "orange";
    }

    else{
        mensagemForm.textContent = "Usuário cadastrado com sucesso!";
        mensagemForm.style.color = "green";
        form.reset(); //limpa
    }
});