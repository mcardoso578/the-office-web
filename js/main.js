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

const botonEmergencia = document.getElementById("boton-emergencia");
const modalEmergencia = document.getElementById("modal-emergencia");
const cerrarEmergencia = document.getElementById("cerrar-emergencia");
const seguirDwight = document.getElementById("seguir-dwight");
const avisarToby = document.getElementById("avisar-toby");
const accionesEmergencia = document.getElementById("acciones-emergencia");
const resultadoEmergencia = document.getElementById("resultado-emergencia");

function abrirEmergencia() {
    modalEmergencia.classList.add("visible");
    modalEmergencia.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-abierto");

    accionesEmergencia.style.display = "flex";
    resultadoEmergencia.classList.remove("visible");
    resultadoEmergencia.innerHTML = "";
}

function cerrarModalEmergencia() {
    modalEmergencia.classList.remove("visible");
    modalEmergencia.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-abierto");
}

if (
    botonEmergencia &&
    modalEmergencia &&
    cerrarEmergencia &&
    seguirDwight &&
    avisarToby
) {
    botonEmergencia.addEventListener("click", abrirEmergencia);
    cerrarEmergencia.addEventListener("click", cerrarModalEmergencia);

    seguirDwight.addEventListener("click", function () {
        accionesEmergencia.style.display = "none";
        resultadoEmergencia.classList.add("visible");

        resultadoEmergencia.innerHTML = `
            <strong>Resultado del protocolo</strong>
            <p>
                Seguiste a Dwight hasta el estacionamiento, donde descubrió
                que había olvidado las llaves de la salida de emergencia.
                Tu evaluación de supervivencia quedó pendiente.
            </p>
        `;
    });

    avisarToby.addEventListener("click", function () {
        accionesEmergencia.style.display = "none";
        resultadoEmergencia.classList.add("visible");

        resultadoEmergencia.innerHTML = `
            <strong>Solicitud rechazada</strong>
            <p>
                Toby comenzó a completar el formulario correspondiente,
                pero Michael lo expulsó de la sala antes de que pudiera
                finalizarlo.
            </p>
        `;
    });

    modalEmergencia.addEventListener("click", function (evento) {
        if (evento.target === modalEmergencia) {
            cerrarModalEmergencia();
        }
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") {
            cerrarModalEmergencia();
        }
    });
}

const candidatosEmpleado = [
    {
        nombre: "Dwight Schrute",
        cargo: "Representante de ventas",
        iniciales: "DS"
    },
    {
        nombre: "Jim Halpert",
        cargo: "Representante de ventas",
        iniciales: "JH"
    },
    {
        nombre: "Pam Beesly",
        cargo: "Recepcionista",
        iniciales: "PB"
    },
    {
        nombre: "Kevin Malone",
        cargo: "Contador",
        iniciales: "KM"
    },
    {
        nombre: "Stanley Hudson",
        cargo: "Representante de ventas",
        iniciales: "SH"
    },
    {
        nombre: "Michael Scott",
        cargo: "Gerente regional",
        iniciales: "MS"
    }
];

const botonEmpleado = document.getElementById("elegir-empleado");
const pantallaEmpleado = document.getElementById("pantalla-empleado");
const nombreGanador = document.getElementById("nombre-ganador");
const cargoGanador = document.getElementById("cargo-ganador");
const inicialesGanador = document.querySelector(".iniciales-ganador");
const resultadoPremio = document.getElementById("resultado-premio");

if (
    botonEmpleado &&
    pantallaEmpleado &&
    nombreGanador &&
    cargoGanador &&
    inicialesGanador &&
    resultadoPremio
) {
    botonEmpleado.addEventListener("click", function () {
        botonEmpleado.disabled = true;
        resultadoPremio.classList.remove("visible");
        pantallaEmpleado.classList.add("seleccionando");

        let cambiosRealizados = 0;

        const intervalo = setInterval(function () {
            const indiceAleatorio = Math.floor(
                Math.random() * candidatosEmpleado.length
            );

            const candidato = candidatosEmpleado[indiceAleatorio];

            nombreGanador.textContent = candidato.nombre;
            cargoGanador.textContent = candidato.cargo;
            inicialesGanador.textContent = candidato.iniciales;

            cambiosRealizados++;

            if (cambiosRealizados >= 18) {
                clearInterval(intervalo);

                pantallaEmpleado.classList.remove("seleccionando");

                nombreGanador.textContent = "Michael Scott";
                cargoGanador.textContent = "Gerente regional";
                inicialesGanador.textContent = "MS";

                resultadoPremio.textContent =
                    "¡Felicitaciones, Michael! Ganador por 14.º mes consecutivo.";

                resultadoPremio.classList.add("visible");
                botonEmpleado.disabled = false;
            }
        }, 100);
    });
}

const recomendaciones = {
    caos: [
        {
            numero: "5x14",
            temporada: "Temporada 5 · Episodio 14",
            titulo: "Stress Relief",
            descripcion:
                "Dwight organiza un simulacro de incendio y demuestra que el verdadero peligro era haberle permitido organizarlo."
        },
        {
            numero: "2x04",
            temporada: "Temporada 2 · Episodio 4",
            titulo: "The Fire",
            descripcion:
                "Un incendio obliga a todos a evacuar la oficina y Michael intenta convertir la emergencia en una actividad grupal."
        }
    ],

    incomodidad: [
        {
            numero: "4x13",
            temporada: "Temporada 4 · Episodio 13",
            titulo: "Dinner Party",
            descripcion:
                "Michael y Jan organizan una cena que alcanza niveles históricos de tensión e incomodidad."
        },
        {
            numero: "6x12",
            temporada: "Temporada 6 · Episodio 12",
            titulo: "Scott's Tots",
            descripcion:
                "Michael debe enfrentar una promesa que realizó años atrás y que definitivamente no podía cumplir."
        }
    ],

    romance: [
        {
            numero: "2x22",
            temporada: "Temporada 2 · Episodio 22",
            titulo: "Casino Night",
            descripcion:
                "Jim le confiesa a Pam lo que siente durante la noche de casino organizada en el depósito."
        },
        {
            numero: "6x04",
            temporada: "Temporada 6 · Episodios 4 y 5",
            titulo: "Niagara",
            descripcion:
                "La oficina viaja a las Cataratas del Niágara para celebrar la boda de Jim y Pam."
        }
    ],

    michael: [
        {
            numero: "2x01",
            temporada: "Temporada 2 · Episodio 1",
            titulo: "The Dundies",
            descripcion:
                "Michael organiza su ceremonia anual de premios en un restaurante Chili's."
        },
        {
            numero: "7x22",
            temporada: "Temporada 7 · Episodio 22",
            titulo: "Goodbye, Michael",
            descripcion:
                "Michael se despide en secreto de sus compañeros antes de abandonar Scranton."
        }
    ],

    dwight: [
        {
            numero: "3x20",
            temporada: "Temporada 3 · Episodio 20",
            titulo: "Safety Training",
            descripcion:
                "Michael intenta demostrar que trabajar en una oficina puede ser tan peligroso como hacerlo en un depósito."
        },
        {
            numero: "9x23",
            temporada: "Temporada 9 · Episodio final",
            titulo: "Finale",
            descripcion:
                "Dwight finalmente alcanza una de sus mayores metas y celebra un día fundamental para su vida."
        }
    ]
};

const botonesAnimo = document.querySelectorAll(".opcion-animo");
const resultadoRecomendacion = document.getElementById(
    "resultado-recomendacion"
);
const numeroRecomendado = document.getElementById("numero-recomendado");
const temporadaRecomendada = document.getElementById(
    "temporada-recomendada"
);
const tituloRecomendado = document.getElementById("titulo-recomendado");
const descripcionRecomendada = document.getElementById(
    "descripcion-recomendada"
);

if (
    botonesAnimo.length > 0 &&
    resultadoRecomendacion &&
    numeroRecomendado &&
    temporadaRecomendada &&
    tituloRecomendado &&
    descripcionRecomendada
) {
    botonesAnimo.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const animoSeleccionado = boton.dataset.animo;
            const opciones = recomendaciones[animoSeleccionado];

            const indiceAleatorio = Math.floor(
                Math.random() * opciones.length
            );

            const recomendacion = opciones[indiceAleatorio];

            botonesAnimo.forEach(function (opcion) {
                opcion.classList.remove("activa");
            });

            boton.classList.add("activa");

            resultadoRecomendacion.classList.remove("cambiando");

            void resultadoRecomendacion.offsetWidth;

            numeroRecomendado.textContent = recomendacion.numero;
            temporadaRecomendada.textContent = recomendacion.temporada;
            tituloRecomendado.textContent = recomendacion.titulo;
            descripcionRecomendada.textContent =
                recomendacion.descripcion;

            resultadoRecomendacion.classList.add("cambiando");
        });
    });
}