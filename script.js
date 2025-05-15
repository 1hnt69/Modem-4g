
async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatbox = document.getElementById("chatbox");
  const message = input.value;
  if (!message) return;

  chatbox.innerHTML += `<p><strong>Tu:</strong> ${message}</p>`;
  input.value = "";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Errore nella risposta.";
  chatbox.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}
