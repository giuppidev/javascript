for (let i = 0; i < 3; i++) {
  const log = () => console.log(i);
  setTimeout(log, 100);
}

function getName() {
  const name = "Pippo";

  return () => {
    console.log(name);
  };
}

// incapsulamento
function contatore() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const incrementa = contatore();

// function factory
function moltiplicatore(fattore) {
  return function (numero) {
    return numero * fattore;
  };
}

const raddoppia = moltiplicatore(2);
const triplica = moltiplicatore(3);

// class alike
function creaContatore() {
  let valore = 0;
  return {
    incrementa: function () {
      valore++;
    },
    ottieniValore: function () {
      return valore;
    },
  };
}

const contatore1 = creaContatore();
contatore1.incrementa();
