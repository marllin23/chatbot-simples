// Função para gerar emojis aleatórios
function generateRandomEmoji() {
    const emojis = ["😊", "😂", "😍", "😎", "🥳", "🤔", "😇", "😜", "😢", "🙃"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const randomX = Math.floor(Math.random() * (window.innerWidth - 50));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));

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

// Função para simular digitação do bot
function simulateTyping(response, chatBox) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot');
    botMessage.innerHTML = `<span class="emoji-chat">🤖</span> <span class="typing">Digitando...</span>`;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        botMessage.innerHTML = `<span class="emoji-chat">🤖</span> ${response}`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// Função para tocar som
function playSound(type) {
    const sound = new Audio(type === 'send' ? 'send.mp3' : 'receive.mp3');
    sound.play();
}

// Função para enviar mensagens do usuário
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const input = inputField.value.trim().toLowerCase();
    const chatBox = document.getElementById('chat-box');

    if (input !== "") {
        const userMessage = document.createElement('div');
        userMessage.classList.add('user');
        userMessage.innerHTML = `<span class="emoji-user">👤</span> ${inputField.value}`;
        chatBox.appendChild(userMessage);
        playSound('send');

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

        simulateTyping(response, chatBox);
        inputField.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Permitir envio com Enter
const inputElement = document.getElementById('user-input');
inputElement.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

// Função para reiniciar o chat
function clearChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = `<div class="bot welcome"><span class="emoji-chat">🤖</span> Chat reiniciado. Faça sua pergunta! 🤖</div>`;
}
