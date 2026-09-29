// Configuración del asistente. Edita estos valores y recarga la página.
// La API key NO va aquí: ponla en config.local.js (copia config.local.example.js).
// Ese archivo no se sube a git. Aviso: la clave queda visible en el navegador; úsalo solo en local.
window.OMLX_ASSISTANT = {
  baseUrl: 'http://localhost:8000',
  apiKey: '', // se define en config.local.js

  assistantName: 'Asistente',
  // Nombre que se muestra para el modelo (el real se detecta solo y se usa internamente)
  modelLabel: 'Faena-Bot',
  // Imagen de la cabecera del panel (vacío = degradado de color)
  avatar: 'img/faena-symbol.png',
  greeting: '¡Hola! Soy tu asistente local. ¿En qué puedo ayudarte?',
  // Instrucciones generales extra. Lo principal (identidad, conocimiento, temas,
  // reglas y respuestas a preguntas) se define en contexto.js
  systemPrompt: 'Usa Markdown cuando ayude a la claridad.',

  maxTokens: 1024,
  temperature: 0.7,
  // true = el modelo "piensa" antes de responder (más lento, a veces mejor)
  enableThinking: false,

  // Adjuntos: máximo de caracteres que se envían por documento y tamaño máximo por archivo
  maxDocChars: 60000,
  maxFileMB: 25,
};
