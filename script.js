// Sons
const sendSound = document.getElementById('send-sound');
const receiveSound = document.getElementById('receive-sound');

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

  document.getElementById('emoji-container')?.appendChild(emojiDiv);
}

// Gera 5 emojis flutuantes
for (let i = 0; i < 5; i++) generateRandomEmoji();

function sendMessage() {
  const inputField = document.getElementById('user-input');
  const input = inputField.value.trim().toLowerCase();
  const chatBox = document.getElementById('chat-box');

  if (input !== "") {
    const userMessage = document.createElement('div');
    userMessage.classList.add('user');
    userMessage.innerHTML = `<i class="fas fa-user"></i> ${inputField.value}`;
    chatBox.appendChild(userMessage);
    sendSound.play();

    const botTyping = document.createElement('div');
    botTyping.classList.add('bot');
    botTyping.setAttribute('id', 'typing');
    botTyping.innerHTML = `<i class="fas fa-robot"></i> Digitando...`;
    chatBox.appendChild(botTyping);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      botTyping.remove();

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

      const botMessage = document.createElement('div');
      botMessage.classList.add('bot');
      botMessage.innerHTML = `<i class="fas fa-robot"></i> ${response}`;
      chatBox.appendChild(botMessage);
      receiveSound.play();
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1200);

    inputField.value = '';
  }
}

function clearChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML = `<div class="bot welcome"><i class="fas fa-robot"></i> Chat reiniciado. Faça sua pergunta! 🤖</div>`;
}

document.getElementById('user-input').addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});
