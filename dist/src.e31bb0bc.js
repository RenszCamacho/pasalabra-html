// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/main.js":[function(require,module,exports) {
var donut = [{
  letter: "a",
  answer: ["abducir", "amsterdam", "andar"],
  status: 0,
  question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Capital de los Países Bajos", "CON LA A. Caminar"]
}, {
  letter: "b",
  answer: ["bingo", "borrar", "buscar"],
  status: 0,
  question: ["CON LA B. Juego que ha sacado de quicio a todos los Skylabers en las sesiones de precurso", "CON LA B. Eliminar", "CON LA B. Lo que se hace anter de encontrar"]
}, {
  letter: "c",
  answer: ["churumbel", "cocinero", "croissant"],
  status: 0,
  question: ["CON LA C. Niño, crío, bebé", "CON LA C. El que hace la comida", "CON LA C. Desayuno típico francés, alternativa al donut"]
}, {
  letter: "d",
  answer: ["diarrea", "domingo", "David"],
  status: 0,
  question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D. Último día de la semana", "CON LA D. Famosa escultura de Miguel Ángel"]
}, {
  letter: "e",
  answer: ["ectoplasma", "Einstein", "Estaño"],
  status: 0,
  question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E. Albert, el autor de la teoría de la relatividad", "CON LA E. Elemento de la tabla periódica cuya abreviatura es Sn"]
}, {
  letter: "f",
  answer: ["facil", "futuro", "Figo"],
  status: 0,
  question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. Que no es presente ni pasado", "CON LA F. Apellido del futbolista portugués al que le tiraron una cabeza de cerdo en el Camp Nou"]
}, {
  letter: "g",
  answer: ["galaxia", "gimnasio", "gordo"],
  status: 0,
  question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Lugar donde entrenar los músculos", "CON LA G. Contrario de flaco"]
}, {
  letter: "h",
  answer: ["harakiri", "huerto", "Hades"],
  status: 0,
  question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Lugar donde se cultivan hortalizas", "CON LA H. Dios griego del inframundo"]
}, {
  letter: "i",
  answer: ["iglesia", "iceberg", "IBM"],
  status: 0,
  question: ["CON LA I. Templo cristiano", "CON LA I. Lo que hundió al Titanic", "CON LA I. Conocida compañía informática que fundó Charles Ranlett Flint en 1911"]
}, {
  letter: "j",
  answer: ["jabali", "Julio", "Jaguar"],
  status: 0,
  question: ["CON LA J. Variedad salvaje del cerdo que sale en la película El Rey León, de nombre Pumba", "CON LA J. Séptimo mes del año", "CON LA J. Marca de coches que se llama como un tipo de felino"]
}, {
  letter: "k",
  answer: ["kamikaze", "Kobe", "Kabul"],
  status: 0,
  question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria", "CON LA K. Nombre de pila de Bryant, jugador de baloncesto ganador de 5 anillos de la NBA con los Lakers", "CON LA K. Capital de Afganistán"]
}, {
  letter: "l",
  answer: ["licantropo", "luna", "lodo"],
  status: 0,
  question: ["CON LA L. Hombre lobo", "CON LA L. Único satélite natural de la Tierra", "CON LA L. Sinónimo de barro"]
}, {
  letter: "m",
  answer: ["misantropo", "musa", "mano"],
  status: 0,
  question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "CON LA M. Divinidad de la mitología griega, hija de Apolo, que protegía una determinada ciencia o arte", "CON LA M. Tiene cinco dedos, igual que el pie"]
}, {
  letter: "n",
  answer: ["necedad", "Neil", "noquear"],
  status: 0,
  question: ["CON LA N. Demostración de poca inteligencia", "CON LA N. Nombre de pila del primer hombre que pisó la Luna", "CON LA N. En boxeo, derribar al contrario"]
}, {
  letter: "o",
  answer: ["orco", "Oliva", "Oscar"],
  status: 0,
  question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "CON LA O. Aceituna", "CON LA O. Los premios más famosos de Hollywood"]
}, {
  letter: "p",
  answer: ["protoss", "porteria", "papiroflexia"],
  status: 0,
  question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "CON LA P. Donde se marcan los goles", "CON LA P. Arte que consiste en el plegado de papel sin usar tijeras ni pegamento para obtener figuras de formas variadas"]
}, {
  letter: "q",
  answer: ["queso", "quiniela", "Quijote"],
  status: 0,
  question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CON LA Q. Clásico juego de apuestas futbolísticas", "CON LA Q. El protagonista del libro más conocido de Cervantes"]
}, {
  letter: "r",
  answer: ["raton", "rosa", "Rumania"],
  status: 0,
  question: ["CON LA R. Roedor", "CON LA R. Flor que se regala por Sant Jordi en Catalunya", "CON LA R. País cuya capital es Bucarest"]
}, {
  letter: "s",
  answer: ["stackoverflow", "semanas", "sol"],
  status: 0,
  question: ["CON LA S. Comunidad salvadora de todo desarrollador informático", "CON LA S. El año tiene 52", "CON LA S. Astro rey"]
}, {
  letter: "t",
  answer: ["terminator", "Teide", "Tarantino"],
  status: 0,
  question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Volcán más famoso de las Islas Canarias", "CON LA T. Apellido del director de Pulp Fiction"]
}, {
  letter: "u",
  answer: ["unamuno", "uvas", "unicornio"],
  status: 0,
  question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro Niebla en 1914", "CON LA U. Se toman 12 en Nochevieja", "CON LA U. Criatura mitológica representada como un caballo blanco con patas de antílope, ojos y barba de chivo y un cuerno en la frente"]
}, {
  letter: "v",
  answer: ["vikingos", "vasectomia", "Vodafone"],
  status: 0,
  question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V. Método anticonceptivo permanente practicado al varón", "CON LA V. Operador de telefonía móvil inicialmente conocido como Racal Telecom"]
}, {
  letter: "w",
  answer: ["sandwich", "whisky", "Whatsapp"],
  status: 0,
  question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CON LA W. Bebida alcohólica famosa en Escocia y en todo el mundo", "CON LA W. Aplicación de mensajería instantánea propiedad de Facebook"]
}, {
  letter: "x",
  answer: ["botox", "x", "xilofono"],
  status: 0,
  question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CON LA X. Tipo de rayos utilizados para obtener radiografías", "CON LA X. Instrumento musical de percusión que aparece en la Danza Macabra, poema sinfónico compuesto por Camille Saint-Saëns"]
}, {
  letter: "y",
  answer: ["peyote", "yegua", "yuca"],
  status: 0,
  question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos", "CON LA Y. Hembra del caballo", "CON LA Y. Manihot esculenta, tubérculo cultivado en América"]
}, {
  letter: "z",
  answer: ["zen", "zapatero", "zoonosis"],
  status: 0,
  question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "CON LA Z. El que arregla los zapatos", "CON LA Z. Enfermedad infecciosa que se transmite de forma natural de los animales al ser humano, y viceversa"]
}]; //Taking the HTML Elements.

var rankinSection = document.getElementById("ranking");
var rankingNameFirst = document.getElementById("ranking__name--first");
var rankingRightFirst = document.getElementById("ranking__rigth--first");
var rankingMedalFirst = document.getElementById("ranking__medal--first");
var rankingNameSecond = document.getElementById("ranking__name--second");
var rankingRightSecond = document.getElementById("ranking__rigth--second");
var rankingMedalSecond = document.getElementById("ranking__medal--second");
var rankingNameThird = document.getElementById("ranking__name--third");
var rankingRightThird = document.getElementById("ranking__rigth--third");
var rankingMedalThird = document.getElementById("ranking__medal--third");
var infoSection = document.getElementById("info");
var donutSection = document.getElementById("donutWrapper");
var infoForm = document.getElementById("inputName");
var showQuestion = document.getElementById("questionContainer");
var showAnswer = document.getElementById("answerContainer");
var form = document.getElementById("form");
var timer = document.getElementById("timer"); //Just regular variables

var ranking = [{
  user: "Skylab",
  score: 20
}, {
  user: "Renszo",
  score: 15
}];
var donutElement = 0;
var donutLetter;
var question;
var name;
var answer;
var random;
var donutStatus;
var rightAnswer;
var letterOfTheDonut;
var clearTimer;
var right = 0;
var wrong = 0;
var inputTimer = timer.innerText = 200;
var timeLeft = inputTimer - 1;
var answeredQuestion = 0; //Show Ranking.

var rankingDesc = function rankingDesc(a, b) {
  return b.score - a.score;
};

var rankPositions = function rankPositions(ranking) {
  var rank = 1;

  for (var user in ranking) {
    if (rank === 1) {
      rankingNameFirst.innerText = ranking[user].user;
      rankingRightFirst.innerText = ranking[user].score;
      rankingMedalFirst.innerText = "🥇";
    } else if (rank === 2) {
      rankingNameSecond.innerText = ranking[user].user;
      rankingRightSecond.innerText = ranking[user].score;
      rankingMedalSecond.innerText = "🥈";
    } else {
      rankingNameThird.innerText = ranking[user].user;
      rankingRightThird.innerText = ranking[user].score;
      rankingMedalThird.innerText = "🥉";
    }

    rank++;
  }
};

var showRanking = function showRanking() {
  donutSection.style.display = "none";
  rankinSection.style.display = "block";
  var userScore = {
    user: name,
    score: right
  };
  ranking.push(userScore);
  ranking.sort(rankingDesc);
  rankPositions(ranking);
}; //Alphabetic game.


var rng = function rng(num) {
  return Math.floor(Math.random() * num);
};

var rngQuestionNumber = function rngQuestionNumber() {
  for (var element in donut) {
    var ball = donut[element];
    random = rng(ball.question.length);
  }

  return random;
};

var chooseQuestion = function chooseQuestion() {
  question = donut[donutElement].question[random];
  return question;
};

var appendQuestion = function appendQuestion() {
  if (donut[donutElement].status === 0) {
    showQuestion.innerText = question;
  }
};

var appendAnswer = function appendAnswer() {
  if (answer === "pasapalabra") {
    showAnswer.innerText = 'Has escogido "Pasapalabra". Quedara pendiente para luego.'; //The answer go to disapear in two seconds.

    setTimeout(function () {
      showAnswer.innerText = "";
    }, 2000);
  } else if (answer === rightAnswer.toLowerCase()) {
    showAnswer.innerText = "Si! \uD83C\uDF89\uD83C\uDF89\uD83C\uDF89 ".concat(rightAnswer.toUpperCase(), " \uD83C\uDF89\uD83C\uDF89\uD83C\uDF89 es la respuesta correcta."); //The answer go to disapear in two seconds.

    setTimeout(function () {
      showAnswer.innerText = "";
    }, 2000);
  } else {
    showAnswer.innerText = "\uD83D\uDEA8 Lo siento, la respuesta correcta es ".concat(rightAnswer.toUpperCase(), " \uD83D\uDEA8"); //The answer go to disapear in two seconds.

    setTimeout(function () {
      showAnswer.innerText = "";
    }, 2000);
  }
};

var clearAnswerInput = function clearAnswerInput(event) {
  event.target.input.value = "";
};

var triggerTheTimer = function triggerTheTimer() {
  //making the countdow.
  clearTimer = setInterval(function () {
    timer.innerText = timeLeft;
    timeLeft--; //do not allow it to be less than a zero.

    if (timeLeft < 0) {
      timer.innerText = 0;
      clearInterval(clearTimer);
    }

    if (timeLeft === 0) {
      showRanking();
    }
  }, 1000);
};

var gameOver = function gameOver() {
  if (timeLeft < 0) {
    clearInterval(clearTimer);
    return true;
  } else {
    //is every questions answered?
    donutStatus = donut.every(function (element) {
      return element.status === 1;
    }); // if is not, return false.

    if (!donutStatus) {
      return false;
    }

    clearInterval(clearTimer);
    return true;
  }
};

var rightOrWrong = function rightOrWrong() {
  if (answer.toLowerCase() === "end") {
    showRanking();
  }

  if (answer === "pasapalabra") {
    letterOfTheDonut.classList.add("pasapalabra");
    appendAnswer();
  } else if (answer === rightAnswer.toLowerCase()) {
    right++;
    donut[donutElement].status = 1;
    letterOfTheDonut.classList.remove("pasapalabra");
    letterOfTheDonut.classList.add("right");
    appendAnswer();
  } else {
    wrong++;
    donut[donutElement].status = 1;
    letterOfTheDonut.classList.remove("pasapalabra");
    letterOfTheDonut.classList.add("wrong");
    appendAnswer();
  }

  donutElement++;
};

var gameFlow = function gameFlow() {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    answer = event.target.input.value.trim().toLowerCase();
    rightAnswer = donut[donutElement].answer[random];
    donutLetter = donut[donutElement].letter;
    letterOfTheDonut = document.getElementById(donutLetter);
    rightOrWrong(); // if the user type 'pasapalabra', we need to ask those unanswered questions.

    if (donutElement === donut.length) {
      donutElement = 0;
    } // here we need to ask just those unanswered questions.


    while (donut[donutElement].status !== 0 && !gameOver()) {
      donutElement++;

      if (donutElement === donut.length) {
        donutElement = 0;
      }
    }

    answeredQuestion = right + wrong;

    if (answeredQuestion === donut.length) {
      clearAnswerInput(event);
      showRanking();
    } else {
      chooseQuestion();
      appendQuestion();
      clearAnswerInput(event);
    }
  });
};

var run = function run() {
  rngQuestionNumber();
  chooseQuestion();
  appendQuestion();
  gameFlow();
  triggerTheTimer();
}; //Intruduction to Alphabetic game.


infoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  name = event.target.name.value;
  infoSection.style.display = "none";
  donutSection.style.display = "flex";
  run();
});
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("normalize.css");

require("./sass/main.scss");

require("./js/main.js");
},{"normalize.css":"../node_modules/normalize.css/normalize.css","./sass/main.scss":"sass/main.scss","./js/main.js":"js/main.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49504" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map