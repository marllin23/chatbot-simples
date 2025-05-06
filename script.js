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
    const inputField = document.getElementById('user-input');
    const input = inputField.value.trim().toLowerCase();
    const chatBox = document.getElementById('chat-box');

    if (input !== "") {
        // Mensagem do usuário
        const userMessage = document.createElement('div');
        userMessage.classList.add('user');
        userMessage.innerHTML = `<i class="fas fa-user"></i> ${inputField.value}`;
        chatBox.appendChild(userMessage);

        // Geração de resposta inteligente
        let response = "";

        if (input.includes("oi") || input.includes("olá")) {
            response = "Olá! Como posso te ajudar hoje? 👋";
        } else if (input.includes("tudo bem")) {
            response = "Estou ótimo! E você, tudo certo por aí?";
        } else if (input.includes("qual seu nome")) {
            response = "Sou um chatbot criado por você! 😄";
        } else if (input.includes("hora") || input.includes("horas")) {
            const now = new Date();
            response = `Agora são ${now.getHours()}h${String(now.getMinutes()).padStart(2, '0')} 🕒`;
        } else if (input.includes("obrigado") || input.includes("valeu")) {
            response = "De nada! Estou sempre aqui para ajudar 🤖";
        } else if (input.includes("piada")) {
            response = "Por que o computador foi preso? Porque ele executou um código malicioso! 😂";
        } else {
            response = "Hmm... ainda estou aprendendo! Pode perguntar de outro jeito? 🤔";
        }

        // Mensagem do bot
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot');
        botMessage.innerHTML = `<i class="fas fa-robot"></i> ${response}`;
        chatBox.appendChild(botMessage);

        // Limpa e rola
        inputField.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function clearChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = `<div class="bot welcome"><i class="fas fa-robot"></i> Chat reiniciado. Faça sua pergunta! 🤖</div>`;
}

