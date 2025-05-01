// Função para gerar emojis aleatórios
function generateRandomEmoji() {
    const emojis = ["😊", "😂", "😍", "😎", "🥳", "🤔", "😇", "😜", "😢", "🙃"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    const emojiDiv = document.createElement('div');
    emojiDiv.classList.add('emoji');
    emojiDiv.style.left = `${randomX}px`;
    emojiDiv.style.top = `${randomY}px`;
    emojiDiv.innerHTML = randomEmoji;
    
    document.getElementById('emoji-container').appendChild(emojiDiv);
}

// Gerar 5 emojis aleatórios
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
        
        // Resposta do bot (simples exemplo)
        var botMessage = document.createElement('div');
        botMessage.classList.add('bot');
        botMessage.innerHTML = `<i class="fas fa-robot"></i> Estou processando sua mensagem...`;
        chatBox.appendChild(botMessage);

        // Limpa a caixa de entrada de texto
        document.getElementById('user-input').value = '';

        // Rola para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
