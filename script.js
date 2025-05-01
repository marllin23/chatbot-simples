// Função para enviar mensagens
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
