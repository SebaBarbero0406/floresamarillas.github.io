// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Sorry i'm gonna leave", time: 3 },
  { text: "i'm driving so far", time: 5 },
  { text: "Tell me when you", time: 7 },
  { text: "Comming to me and say", time: 12 },
  { text: "you want me again", time: 13 },
  { text: "never wanna lose me", time: 17 },
  { text: "cuzz i'll be missing you", time: 21 },
  { text: "Incluso si miro hacia atrás", time: 24 },
  { text: "Al final eres tú otra vez", time: 28 },
  { text: "Por eso me gustas", time: 30 },
  { text: "Tengo miedo de que vuelvas a alejarte de mi", time: 33 },
  { text: "Tengo miedo de que vuelvas a alejarte de mi", time: 38 },
  { text: "never enough", time: 43 },
  { text: "Juts for one night", time: 44 },
  { text: "i got lost of things", time: 46 },
  { text: "gotta tell you all night long", time: 48 },
  { text: "Promise i'll never leave you alone again", time: 54 },
  { text: "take you into my loving arms", time: 57 },
  { text: "and i look into your eyes", time: 65 },
  { text: "then i'm gonna whisper", time: 69 },
  { text: "just how beautiful you are", time: 72 },
  { text: "together", time: 75 },
  { text: "together", time: 78 },
  { text: "together", time: 81 },
  { text: "together", time: 83 },
  { text: "together", time: 85 },
  { text: "together", time: 87 },
  { text: "Incluso si tienes que ir a algún lugar por un tiempo", time: 97},
  { text: "Incluso si tienes que ir a algún lugar por un tiempo", time: 103},
  { text: "Está bien, porque siempre seremos los mismos", time: 107 },
  { text: "Los momentos que he esperado", time: 117 },
  { text: "La confesión que he soportado", time: 119 },
  { text: "Es obvio, pero quiero hacerlo ahora", time: 121 },
  { text: "Hace mucho que no puedo decirte", time: 126 },
  { text: "Hace mucho que no puedo decirte", time: 130 },
  { text: "Que te amo pero me ponía nervioso", time: 134 },
  { text: "Que te amo pero me ponía nervioso", time: 138 },
  { text: "Promise i'll never leave you alone again", time: 142 },
  { text: "take you into my loving arms", time: 147 },
  { text: "and i look into your eyes", time: 152 },
  { text: "then i'm gonna whisper", time: 155 },
  { text: "just how beautiful you are", time: 159 },
  { text: "together", time: 162 },
  { text: "together", time: 165 },
  { text: "just how beautiful you are", time: 169 },
  { text: "together", time: 171 },
  { text: "our beloved summer", time: 175 },
  { text: "together", time: 180 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);