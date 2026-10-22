const cars = [
  {
    name: "Porsche",
    img: "assets/Porshe 911.png",
    year: "2019",
    hp: "450cv",
    cor: "Prata",
    valor: "R$ 850.000",
    km: "12.000km"
  },
  {
    name: "BMW",
    img: "assets/Bmw.png",
    year: "2022",
    hp: "510cv",
    cor: "Azul",
    valor: "R$ 650.000",
    km: "8.000km"
  },
  {
    name: "Escalade",
    img: "assets/Cadillac Escalade Preto em Estúdio.png",
    year: "2023",
    hp: "420cv",
    cor: "Preto",
    valor: "R$ 900.000",
    km: "5.000km"
  }
];

let index = 0;

const carImg = document.getElementById("car");
const name = document.getElementById("name");
const year = document.getElementById("year");
const count = document.getElementById("count");

function updateCar() {
  carImg.style.opacity = 0;

  setTimeout(() => {
    carImg.src = cars[index].img;
    name.innerText = cars[index].name;
    year.innerText = cars[index].year;
    count.innerText = "0" + (index + 1);

    carImg.style.opacity = 1;
  }, 300);
}

function next() {
  index = (index + 1) % cars.length;
  updateCar();
}

function prev() {
  index = (index - 1 + cars.length) % cars.length;
  updateCar();
}

/* MODAL */
function abrirModal() {
  const car = cars[index];

  document.getElementById("modalNome").innerText = car.name;
  document.getElementById("modalHp").innerText = car.hp;
  document.getElementById("modalCor").innerText = car.cor;
  document.getElementById("modalValor").innerText = car.valor;
  document.getElementById("modalKm").innerText = car.km;

  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

let aberto = false;

function toggleInfo() {
  const box = document.getElementById("infoBox");
  const car = cars[index];

  if (!aberto) {
    document.getElementById("hp").innerText = car.hp;
    document.getElementById("cor").innerText = car.cor;
    document.getElementById("valor").innerText = car.valor;
    document.getElementById("km").innerText = car.km;

    box.style.display = "block";
    aberto = true;
  } else {
    box.style.display = "none";
    aberto = false;
  }
}
