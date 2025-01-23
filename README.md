🎲 Jogo do Número Secreto 🎲
 - Bem-vindo ao projeto "Jogo do Número Secreto"! Este é um jogo simples e interativo desenvolvido com HTML, CSS e JavaScript, onde o jogador tenta adivinhar um número secreto gerado       aleatoriamente.

📝 Descrição
  - Neste jogo, o jogador deve adivinhar o número secreto gerado aleatoriamente em um intervalo pré-definido (1 a 10 por padrão).
    Após cada tentativa, o jogo informa se o número secreto é maior ou menor que o chute, até que o jogador acerte. Ao final, é exibido o número de tentativas utilizadas, e o jogador        pode reiniciar o jogo.

🎯 Funcionalidades
  * Número secreto aleatório: Um número único é gerado a cada rodada.
  * Feedback em tempo real: O jogo orienta se o número secreto é maior ou menor que o chute.
  * Contador de tentativas: Exibe quantas tentativas foram necessárias para acertar.
  * Mudança de fase: Muda de fase quando acertamos 
  o número secreto na primeira tentativa.
  * Interface interativa: Design moderno e responsivo.
  * Voz sintetizada: Mensagens são narradas com a biblioteca ResponsiveVoice.

📂 Estrutura do Projeto
  * index.html: Estrutura principal da interface do jogo.
    Inclui os elementos HTML, como os botões e o campo de entrada.

  * style.css: Estilização do jogo.
    Proporciona um layout moderno com gradientes, sombras e responsividade.

  * app1.js: Lógica do jogo.
    Contém todas as funcionalidades, como geração de números aleatórios, controle de tentativas e interação com o DOM.

  * Imagens (opcionais):

    * img/code.png: Imagem de fundo com tema de programação.
    * img/Ruido.png: Textura aplicada ao contêiner do jogo.
    * img/ia.png: Elemento decorativo para a interface.

🛠️ Tecnologias Utilizadas
  * HTML: Estrutura do jogo.
  * CSS: Design moderno e responsivo.
  * JavaScript: Lógica e interatividade.
  * ResponsiveVoice: Para a narração das mensagens.

📱 Responsividade
   - O jogo é otimizado para diferentes tamanhos de tela. Em dispositivos menores, a imagem decorativa é oculta, e os elementos se ajustam para melhor visualização.

🗂️ Funcionalidades do Código
   - Arquivo: app1.js
     I. Geração de número secreto único:
         * gerarNumeroAleatorio() cria um número aleatório dentro do intervalo e evita repetição.

     II. Verificação do chute:
         * verificarChute() compara o chute do jogador com o número secreto e fornece feedback.

     III. Mensagens dinâmicas:
         * exibirTextoNaTela() atualiza a interface e narra as mensagens.

     IV. Reiniciar jogo:
         * reiniciarJogo() reinicia todas as variáveis e permite uma nova partida.

   - Arquivo: style.css
     * Estilização moderna com:
       * Gradiente de fundo.
       * Contêiner responsivo com sombras e bordas arredondadas.
       * Adaptação para telas menores com @media.
    
   - Arquivo: index.html
     * Layout estruturado:
       * Campo de entrada para o chute.
       * Botões para interação:
         * Chutar: Verifica o número.
         * Novo Jogo: Reinicia o jogo.

🚀 Como Executar
   - Localmente:
     I. Clone o repositório:
         * git clone https://github.com/PauloMPPatricio/jogo-numero-secreto.git
         * cd jogo-numero-secreto

     II. Abra o arquivo index.html no navegador:
         * Clique duas vezes no arquivo, ou
         * Use uma extensão de servidor local, como o Live Server no VS Code, para melhor experiência.

   - Online (Vercel):
     I. Acesse a URL da aplicação já publicada:
         * Clique ou copie a URL a seguir no navegador:
         * [https://jogo-numero-secreto-rosy-chi.vercel.app/]
     
     II. Jogue diretamente no navegador!
         * A interface do jogo estará pronta para uso.

👨‍💻 Autor
   - Desenvolvido por Paulo M P Patricio.
   - Aluno do ONE - Oracle Next Educations, curso em parceria com a Alura.
   - Entre em contato para dúvidas ou sugestões!

📜 Licença
   - Este projeto está licenciado sob a MIT License. Sinta-se à vontade para usar e modificar.
