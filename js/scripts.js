let AlexOvechkin = {
  name: "Alex Ovechkin",
  imgUrl: "img/hockey1.jpg",
  btnId: "alex",
};
let SidneyCrosby = {
  name: "Sidney Crosby",
  imgUrl: "img/hockey2.jpg",
  btnId: "sidney",
};
let ConnorMcDavid = {
  name: "Connor McDavid",
  imgUrl: "img/hockey3.jpg",
  btnId: "connor",
};
let AustonMatthews = {
  name: "Auston Matthews",
  imgUrl: "img/hockey4.jpg",
  btnId: "auston",
};
let NathanMacKinnon = {
  name: "Nathan MacKinnon",
  imgUrl: "img/hockey5.jpg",
  btnId: "nathan",
};

let VictorHedman = {
  name: "Victor Hedman",
  imgUrl: "img/hockey6.jpg",
  btnId: "victor",
};
let PatrikLaine = {
  name: "Patrik Laine",
  imgUrl: "img/hockey7.jpg",
  btnId: "patrik",
};
let NikitaKucherov = {
  name: "Nikita Kucherov",
  imgUrl: "img/hockey8.jpg",
  btnId: "nikita",
};

let MarioLemieux = {
  name: "Mario Lemieux",
  imgUrl: "img/hockey9.jpg",
  btnId: "mario",
};

// array of objects
let hockeyPlayers = [
  AlexOvechkin,
  SidneyCrosby,
  ConnorMcDavid,
  AustonMatthews,
  NathanMacKinnon,
  VictorHedman,
  PatrikLaine,
  NikitaKucherov,
  MarioLemieux,
];

console.log(hockeyPlayers);

let selectedPlayers = 0;

function displayCards(card) {
  const container = document.getElementById("card_container");
  const div = document.createElement("div");

  div.innerHTML = `
    <div
            class="card border-2 shadow-md bg-gray-900 rounded-xl overflow-hidden text-white"
          >
            <img src="${card.imgUrl}" alt="footballer" class="w-full" />
            <div class="card-text text-center">
              <h1
                class="card-title sm:text-3xl text-xl font-semibold mb-4 mt-4"
              >
                ${card.name}
              </h1>
              <button
                id="${card.btnId}"
                class="btn bg-blue-500 hover:bg-orange-600 p-2 px-9 text-white text-xl font-semibold mb-6 rounded-lg uppercase"
                
              >
                Select
              </button>
            </div>
          </div> `;

  container.appendChild(div);

  const cardBtn = document.getElementById(card.btnId);
  const ul = document.getElementById("selected_ul");

  cardBtn.addEventListener("click", function () {
    const li = document.createElement("li");

    li.innerHTML = `
            <li class="py-2">${card.name}</li>
            `;
    ul.appendChild(li);
    cardBtn.setAttribute("disabled", "true");
    cardBtn.classList.add("bg-gray-500", "hover:bg-gray-500");
    selectedPlayers = selectedPlayers + 1;
    console.log(`Number of selected players: ${selectedPlayers}`);

    calculation(selectedPlayers);
  });
}

displayCards(AlexOvechkin);
displayCards(SidneyCrosby);
displayCards(ConnorMcDavid);
displayCards(AustonMatthews);
displayCards(NathanMacKinnon);
displayCards(VictorHedman);
displayCards(PatrikLaine);
displayCards(NikitaKucherov);
displayCards(MarioLemieux);
