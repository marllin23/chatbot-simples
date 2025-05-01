// Função para exibir mensagens no chat
function displayMessage(message, isBot = false) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');

    // Se for mensagem do usuário, usamos a classe "user", se não, "bot"
    if (isBot) {
        msgDiv.classList.add('bot');
    } else {
        msgDiv.classList.add('user');
    }

    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);

    // Sempre rolar até o final do chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para enviar mensagens
const sendBtn = document.getElementById('send-btn');
sendBtn.addEventListener('click', () => {
    const input = document.getElementById('user-input');
    const message = input.value;
    if (message) {
        displayMessage(message, false); // Exibe a mensagem do usuário
        input.value = ''; // Limpa o campo de entrada
        // Resposta do bot (para exemplo, sempre uma resposta padrão)
        setTimeout(() => {
            displayMessage("Bot: Olá, como posso ajudar? 😊", true);
        }, 1000); // Bot responde após 1 segundo
    }
});

// Permitir que o usuário envie a mensagem ao pressionar "Enter"
document.getElementById('user-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});

// Emojis aleatórios
const emojiContainer = document.createElement('div');
emojiContainer.id = 'emoji-container';
document.body.appendChild(emojiContainer);

const emojis = ['😊', '😂', '😎', '😍', '😜'];
function randomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    emojiContainer.textContent = emojis[randomIndex];
}
setInterval(randomEmoji, 2000); // Troca o emoji a cada 2 segundos
