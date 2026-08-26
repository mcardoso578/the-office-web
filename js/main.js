const frases = [
    {
        texto: "I'm not superstitious, but I am a little stitious.",
        autor: "Michael Scott"
    },
    {
        texto: "Bears. Beets. Battlestar Galactica.",
        autor: "Jim Halpert"
    },
    {
        texto: "Whenever I'm about to do something, I think: Would an idiot do that?",
        autor: "Dwight Schrute"
    },
    {
        texto: "Why waste time say lot word when few word do trick?",
        autor: "Kevin Malone"
    },
    {
        texto: "I wish there was a way to know you're in the good old days before you've actually left them.",
        autor: "Andy Bernard"
    },
    {
        texto: "There's a lot of beauty in ordinary things.",
        autor: "Pam Beesly"
    }
];

const botonFrase = document.getElementById("boton-frase");
const textoFrase = document.getElementById("texto-frase");
const autorFrase = document.getElementById("autor-frase");

if (botonFrase && textoFrase && autorFrase) {
    botonFrase.addEventListener("click", function () {
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        const fraseSeleccionada = frases[indiceAleatorio];

        textoFrase.textContent = `“${fraseSeleccionada.texto}”`;
        autorFrase.textContent = `— ${fraseSeleccionada.autor}`;
    });
}