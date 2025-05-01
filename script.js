function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Adiciona a mensagem do usuário
    let chatBox = document.getElementById('chat-box');
    let userMessage = document.createElement('div');
    userMessage.classList.add('user');
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Resposta automática do bot
    let botMessage = document.createElement('div');
    botMessage.classList.add('bot');
    botMessage.textContent = getBotResponse(userInput);
    chatBox.appendChild(botMessage);

    // Rola a tela para mostrar a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;

    // Limpa o campo de entrada
    document.getElementById('user-input').value = "";
}

function getBotResponse(userInput) {
    const responses = {
        "olá": "Olá! Como posso ajudar você?",
        "como vai?": "Estou bem, obrigado por perguntar! E você?",
        "qual é o seu nome?": "Eu sou um chatbot sem nome por enquanto. :)",
        "adeus": "Adeus! Até logo!",
    };

    userInput = userInput.toLowerCase();

    return responses[userInput] || "Desculpe, não entendi. Pode tentar outra coisa?";
}
