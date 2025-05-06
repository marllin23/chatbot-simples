// Função para gerar emojis aleatórios
function generateRandomEmoji() {
    const emojis = ["😊", "😂", "😍", "😎", "🥳", "🤔", "😇", "😜", "😢", "🙃"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    // Ajuste para garantir que os emojis fiquem visíveis
    const randomX = Math.floor(Math.random() * (window.innerWidth - 50)); // 50 é para não ultrapassar a largura da tela
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50)); // 50 é para não ultrapassar a altura da tela

    const emojiDiv = document.createElement('div');
    emojiDiv.classList.add('emoji');
    emojiDiv.style.left = `${randomX}px`;
    emojiDiv.style.top = `${randomY}px`;
    emojiDiv.innerHTML = randomEmoji;
    
    document.getElementById('emoji-container').appendChild(emojiDiv);
}

// Gerar 5 emojis aleatórios quando a página carrega
for (let i = 0; i < 5; i++) {
    generateRandomEmoji();
}

// Função para enviar mensagens do usuário
function sendMessage() {
    var input = document.getElementById('user-input').value;
    var chatBox = document.getElementById('chat-box');
    
    if (input.trim() !== "") {
        // Adiciona a mensagem do usuário
        var userMessage = document.createElement('div');
        userMessage.classList.add('user');
        userMessage.innerHTML = `<i class="fas fa-user"></i>${input}`;
        chatBox.appendChild(userMessage);
        
        // Resposta do bot (lógica condicional)
        var botMessage = document.createElement('div');
        botMessage.classList.add('bot');
        botMessage.innerHTML = `<i class="fas fa-robot"></i> Estou processando sua mensagem...`;
        chatBox.appendChild(botMessage);

        // Limpa a caixa de entrada de texto
        document.getElementById('user-input').value = '';

        // Rola para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;

        // Respostas condicionais do bot
        setTimeout(() => {
            var botResponse = document.createElement('div');
            botResponse.classList.add('bot');
            
            // Respostas diferentes dependendo da entrada do usuário
            if (input.toLowerCase().includes("olá")) {
                botResponse.innerHTML = `<i class="fas fa-robot"></i> Olá! Como posso te ajudar? 😊`;
            } else if (input.toLowerCase().includes("nome")) {
                botResponse.innerHTML = `<i class="fas fa-robot"></i> Eu sou o Chatbot! Qual é o seu nome?`;
            } else if (input.toLowerCase().includes("cor favorita")) {
                botResponse.innerHTML = `<i class="fas fa-robot"></i> Minha cor favorita é azul! 💙`;
            } else if (input.toLowerCase().includes("hobby")) {
                botResponse.innerHTML = `<i class="fas fa-robot"></i> Eu adoro aprender novas coisas! E você, qual é o seu hobby?`;
            } else if (input.toLowerCase().includes("como você está")) {
                botResponse.innerHTML = `<i class="fas fa-robot"></i> Eu estou ótimo, obrigado por perguntar! 😊 E você?`;
            } else if (input.toLowerCase().includes("quantos anos você tem")) {
                botResponse.innerHTML = `<i class="fas fa-robot"></i> Eu sou intemporal! Não tenho idade. 😎`;
            } else {
                botResponse.innerHTML = `<i class="fas fa-robot"></i> Desculpe, não entendi sua pergunta. Pode reformular? 🤔`;
            }

            chatBox.appendChild(botResponse);
            chatBox.scrollTop = chatBox.scrollHeight; // Rola para a última mensagem
        }, 1000);
    }
}
function clearChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = `<div class="bot welcome"><i class="fas fa-robot"></i> Chat reiniciado. Faça sua pergunta! 🤖</div>`;
}

