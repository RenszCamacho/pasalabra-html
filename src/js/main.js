let right = 0,
  wrong = 0,
  username,
  quit = false,
  ranking = [],
  answer,
  answeredQuestions,
  random;

let donut = [
  {
    letter: "a",
    answer: ["abducir", "amsterdam", "andar"],
    status: 0,
    question: [
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
      "CON LA A. Capital de los Países Bajos",
      "CON LA A. Caminar",
    ],
  },
  {
    letter: "b",
    answer: ["bingo", "borrar", "buscar"],
    status: 0,
    question: [
      "CON LA B. Juego que ha sacado de quicio a todos los Skylabers en las sesiones de precurso",
      "CON LA B. Eliminar",
      "CON LA B. Lo que se hace anter de encontrar",
    ],
  },
  {
    letter: "c",
    answer: ["churumbel", "cocinero", "croissant"],
    status: 0,
    question: [
      "CON LA C. Niño, crío, bebé",
      "CON LA C. El que hace la comida",
      "CON LA C. Desayuno típico francés, alternativa al donut",
    ],
  },
  {
    letter: "d",
    answer: ["diarrea", "domingo", "David"],
    status: 0,
    question: [
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
      "CON LA D. Último día de la semana",
      "CON LA D. Famosa escultura de Miguel Ángel",
    ],
  },
  {
    letter: "e",
    answer: ["ectoplasma", "Einstein", "Estaño"],
    status: 0,
    question: [
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
      "CON LA E. Albert, el autor de la teoría de la relatividad",
      "CON LA E. Elemento de la tabla periódica cuya abreviatura es Sn",
    ],
  },
  {
    letter: "f",
    answer: ["facil", "futuro", "Figo"],
    status: 0,
    question: [
      "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
      "CON LA F. Que no es presente ni pasado",
      "CON LA F. Apellido del futbolista portugués al que le tiraron una cabeza de cerdo en el Camp Nou",
    ],
  },
  {
    letter: "g",
    answer: ["galaxia", "gimnasio", "gordo"],
    status: 0,
    question: [
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      "CON LA G. Lugar donde entrenar los músculos",
      "CON LA G. Contrario de flaco",
    ],
  },
  {
    letter: "h",
    answer: ["harakiri", "huerto", "Hades"],
    status: 0,
    question: [
      "CON LA H. Suicidio ritual japonés por desentrañamiento",
      "CON LA H. Lugar donde se cultivan hortalizas",
      "CON LA H. Dios griego del inframundo",
    ],
  },
  {
    letter: "i",
    answer: ["iglesia", "iceberg", "IBM"],
    status: 0,
    question: [
      "CON LA I. Templo cristiano",
      "CON LA I. Lo que hundió al Titanic",
      "CON LA I. Conocida compañía informática que fundó Charles Ranlett Flint en 1911",
    ],
  },
  {
    letter: "j",
    answer: ["jabali", "Julio", "Jaguar"],
    status: 0,
    question: [
      "CON LA J. Variedad salvaje del cerdo que sale en la película El Rey León, de nombre Pumba",
      "CON LA J. Séptimo mes del año",
      "CON LA J. Marca de coches que se llama como un tipo de felino",
    ],
  },
  {
    letter: "k",
    answer: ["kamikaze", "Kobe", "Kabul"],
    status: 0,
    question: [
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
      "CON LA K. Nombre de pila de Bryant, jugador de baloncesto ganador de 5 anillos de la NBA con los Lakers",
      "CON LA K. Capital de Afganistán",
    ],
  },
  {
    letter: "l",
    answer: ["licantropo", "luna", "lodo"],
    status: 0,
    question: [
      "CON LA L. Hombre lobo",
      "CON LA L. Único satélite natural de la Tierra",
      "CON LA L. Sinónimo de barro",
    ],
  },
  {
    letter: "m",
    answer: ["misantropo", "musa", "mano"],
    status: 0,
    question: [
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
      "CON LA M. Divinidad de la mitología griega, hija de Apolo, que protegía una determinada ciencia o arte",
      "CON LA M. Tiene cinco dedos, igual que el pie",
    ],
  },
  {
    letter: "n",
    answer: ["necedad", "Neil", "noquear"],
    status: 0,
    question: [
      "CON LA N. Demostración de poca inteligencia",
      "CON LA N. Nombre de pila del primer hombre que pisó la Luna",
      "CON LA N. En boxeo, derribar al contrario",
    ],
  },
  {
    letter: "ñ",
    answer: ["señal", "puñal", "caña"],
    status: 0,
    question: [
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      "CONTIENE LA Ñ. Arma blanca que aparece en el juego del Cluedo",
      "CONTIENE LA Ñ. Artilugio de pesca que también puede pedirse en un bar",
    ],
  },
  {
    letter: "o",
    answer: ["orco", "Oliva", "Oscar"],
    status: 0,
    question: [
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
      "CON LA O. Aceituna",
      "CON LA O. Los premios más famosos de Hollywood",
    ],
  },
  {
    letter: "p",
    answer: ["protoss", "porteria", "papiroflexia"],
    status: 0,
    question: [
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
      "CON LA P. Donde se marcan los goles",
      "CON LA P. Arte que consiste en el plegado de papel sin usar tijeras ni pegamento para obtener figuras de formas variadas",
    ],
  },
  {
    letter: "q",
    answer: ["queso", "quiniela", "Quijote"],
    status: 0,
    question: [
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
      "CON LA Q. Clásico juego de apuestas futbolísticas",
      "CON LA Q. El protagonista del libro más conocido de Cervantes",
    ],
  },
  {
    letter: "r",
    answer: ["raton", "rosa", "Rumania"],
    status: 0,
    question: [
      "CON LA R. Roedor",
      "CON LA R. Flor que se regala por Sant Jordi en Catalunya",
      "CON LA R. País cuya capital es Bucarest",
    ],
  },
  {
    letter: "s",
    answer: ["stackoverflow", "semanas", "sol"],
    status: 0,
    question: [
      "CON LA S. Comunidad salvadora de todo desarrollador informático",
      "CON LA S. El año tiene 52",
      "CON LA S. Astro rey",
    ],
  },
  {
    letter: "t",
    answer: ["terminator", "Teide", "Tarantino"],
    status: 0,
    question: [
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      "CON LA T. Volcán más famoso de las Islas Canarias",
      "CON LA T. Apellido del director de Pulp Fiction",
    ],
  },
  {
    letter: "u",
    answer: ["unamuno", "uvas", "unicornio"],
    status: 0,
    question: [
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro Niebla en 1914",
      "CON LA U. Se toman 12 en Nochevieja",
      "CON LA U. Criatura mitológica representada como un caballo blanco con patas de antílope, ojos y barba de chivo y un cuerno en la frente",
    ],
  },
  {
    letter: "v",
    answer: ["vikingos", "vasectomia", "Vodafone"],
    status: 0,
    question: [
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      "CON LA V. Capital del País Vasco",
      "CON LA V. Método anticonceptivo permanente practicado al varón",
      "CON LA V. Operador de telefonía móvil inicialmente conocido como Racal Telecom",
    ],
  },
  {
    letter: "w",
    answer: ["sandwich", "whisky", "Whatsapp"],
    status: 0,
    question: [
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
      "CON LA W. Bebida alcohólica famosa en Escocia y en todo el mundo",
      "CON LA W. Aplicación de mensajería instantánea propiedad de Facebook",
    ],
  },
  {
    letter: "x",
    answer: ["botox", "x", "xilofono"],
    status: 0,
    question: [
      "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
      "CON LA X. Tipo de rayos utilizados para obtener radiografías",
      "CON LA X. Instrumento musical de percusión que aparece en la Danza Macabra, poema sinfónico compuesto por Camille Saint-Saëns",
    ],
  },
  {
    letter: "y",
    answer: ["peyote", "yegua", "yuca"],
    status: 0,
    question: [
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos",
      "CON LA Y. Hembra del caballo",
      "CON LA Y. Manihot esculenta, tubérculo cultivado en América",
    ],
  },
  {
    letter: "z",
    answer: ["zen", "zapatero", "zoonosis"],
    status: 0,
    question: [
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      "CON LA Z. El que arregla los zapatos",
      "CON LA Z. Enfermedad infecciosa que se transmite de forma natural de los animales al ser humano, y viceversa",
    ],
  },
];

let donutElement = 0;
let question;

const rng = (num) => Math.floor(Math.random() * num);

const rngQuestion = () => {
  for (let letter in donut) {
    let element = donut[letter];
    random = rng(element.question.length);
  }
  return random;
};

const showQuestion = () => {
  question = donut[donutElement].question[random];
  return question;
};

const showUserAnswer = () => {
  const input = document.getElementById("form");
  let letter = donet[donutElement].letter;
  input.addEventListener("submit", (event) => {
    event.preventDefault();
    answer = event.target.answer.value;
    if (answer === donut[donutElement].answer[random]) {
      dunut[donutElement].status = 1;
      document.getElementById(letter).style.backgroundColor = "green";
      donutElement++;
    } else {
      dunut[donutElement].status = 1;
      document.getElementById(letter).style.backgroundColor = "red";
    }
  });
};

const run = () => {
  rngQuestion();
  showQuestion();
};

run();
