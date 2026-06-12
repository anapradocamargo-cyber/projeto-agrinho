// Selecionando os elementos da página
const btnArvore = document.getElementById('btn-arvore');
const btnFlor = document.getElementById('btn-flor');
const btnLixo = document.getElementById('btn-lixo');
const btnPoluicao = document.getElementById('btn-poluicao');

const cenario = document.getElementById('cenario');
const mensagem = document.getElementById('mensagem-ecologica');

// Funções para mudar o cenário
function acaoPositiva(texto) {
    cenario.className = 'cenario-positivo';
    mensagem.textContent = texto;
}

function acaoNegativa(texto) {
    cenario.className = 'cenario-negativo';
    mensagem.textContent = texto;
}

// Ouvintes de cliques (Event Listeners)
btnArvore.addEventListener('click', () => {
    acaoPositiva('🌲 Parabéns! Você plantou uma árvore. Ela vai ajudar a purificar o ar e dar sombra.');
});

btnFlor.addEventListener('click', () => {
    acaoPositiva('🌸 Lindo! As flores atraem polinizadores como abelhas e borboletas, melhorando a biodiversidade.');
});

btnLixo.addEventListener('click', () => {
    acaoNegativa('🗑️ Que pena... O lixo jogado no chão vai parar nos rios, sufocando os peixes e poluindo a água.');
});

btnPoluicao.addEventListener('click', () => {
    acaoNegativa('🏭 Alerta! A poluição química nos rios destrói ecossistemas inteiros e afeta a nossa própria saúde.');
});
