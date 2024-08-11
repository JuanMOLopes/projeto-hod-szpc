//passo1
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

//passo2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //passo3
        desativarBotaoSelecionado();

        //passo 4
        marcarBotaoSelecionado(botao);

        //passo 5
        esconderImagemAtiva();

        //passo 6
        mostrarImagemDeFundo(indice);

        //passo 7

        esconderInformacoesAtivas();

        //passo 8 
        mostrarInformacoes(indice);
    });
});

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

