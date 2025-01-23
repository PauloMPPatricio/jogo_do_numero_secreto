const jogo = {
    listaDeNumerosSorteados: [], // Armazena números que já foram sorteados para evitar repetição
    numeroLimite: 10, // Limite máximo para o número secreto
    numeroSecreto: null, // Número secreto que o jogador deve adivinhar
    tentativas: 1, // Contador de tentativas do jogador
};

/*
 * Atualiza o conteúdo de um elemento na tela e utiliza um sintetizador de voz
 * para ler o texto em voz alta.
 * @param {string} tag - Seletor do elemento (ex: 'h1', 'p')
 * @param {string} texto - Texto que será exibido e falado
 */
function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.3});
}

/*
 * Exibe as mensagens iniciais do jogo, incluindo o título e as instruções
 * sobre o intervalo do número secreto.
 */
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${jogo.numeroLimite}.`);
}

/*
 * Verifica o chute do jogador e compara com o número secreto.
 * Informa se o chute está correto, maior ou menor que o número secreto,
 * além de atualizar o número de tentativas.
 */
function verificarChute() {
    const chute = document.querySelector('input').value;

    // Valida se o chute é um número dentro do intervalo permitido
    if (isNaN(chute) || chute < 1 || chute > jogo.numeroLimite) {
        exibirTextoNaTela('p', `Por favor, insira um número entre 1 e ${jogo.numeroLimite}.`);
        limparCampo();
        return;
    }

    // Compara o chute com o número secreto
    if (chute == jogo.numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        const palavraTentativa = jogo.tentativas > 1 ? 'tentativas' : 'tentativa';
        const mensagemTentativas = `Você descobriu o número secreto com ${jogo.tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

        // Aumenta a dificuldade se o jogador acertar na primeira tentativa
        aumentarDificuldade();

    } else {
        // Informa se o número secreto é maior ou menor
        const mensagem = chute > jogo.numeroSecreto ? 'O número secreto é menor.' : 'O número secreto é maior.';
        exibirTextoNaTela('p', mensagem);
        jogo.tentativas++;
        limparCampo();
    }
}

/*
 * Gera um número aleatório dentro do intervalo definido e garante que
 * ele não tenha sido sorteado anteriormente.
 * @returns {number} Número aleatório único
 */
function gerarNumeroAleatorio() {
    let numeroEscolhido;
    do {
        numeroEscolhido = parseInt(Math.random() * jogo.numeroLimite + 1);
    } while (jogo.listaDeNumerosSorteados.includes(numeroEscolhido));

    jogo.listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(jogo.listaDeNumerosSorteados);
    return numeroEscolhido;
}

/*
 * Limpa o campo de entrada onde o jogador insere o chute, para
 * preparar para a próxima tentativa.
 */
function limparCampo() {
    const chute = document.querySelector('input');
    chute.value = '';
}

/*
 * Reinicia o jogo, gerando um novo número secreto, resetando o número
 * de tentativas e exibindo novamente as mensagens iniciais.
 */
function reiniciarJogo() {
    jogo.numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    jogo.tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

/*
 * implementa a lógica de aumentar a dificuldade do jogo, alterando a 
 * variável numeroLimite de 10 em 10 até no máximo 100, sempre que o 
 * jogador acertar o número na primeira tentativa (palavraTentativa == 1).
 */
function aumentarDificuldade() {
    if (jogo.tentativas === 1 && jogo.numeroLimite < 100) { // Verifica se acertou na primeira tentativa e se ainda não atingiu o limite máximo
        jogo.numeroLimite = Math.min(jogo.numeroLimite + 10, 100); // Aumenta o limite em 10, sem ultrapassar 100
        setTimeout(() => {
            exibirTextoNaTela('p', `Parabéns, você mudou de fase!`);
        }, 7000);// Atraso de 2 segundos antes de exibir a mensagem.
    }
}

// Inicialização do jogo
jogo.numeroSecreto = gerarNumeroAleatorio();
exibirMensagemInicial();
