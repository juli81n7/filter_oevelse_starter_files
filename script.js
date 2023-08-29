const btnAll = document.querySelectorAll("button");
const seAlle = document.querySelector(".sealle");

const elbiler = document.querySelector(".elbiler");
const seats = document.querySelector(".seats");
const eljon = document.querySelector(".eljon");
const rug = document.querySelector(".rug");

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const elVe = vehicles.filter((vehicle) => vehicle.isElectric === true);
console.log("elVE = ", elVe);

const veSeats = vehicles.filter((vehicle) => vehicle.passengers >= 2);
console.log("veSeats =", veSeats);

const elveJ = vehicles.filter((vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas");
console.log("elveJ =", elveJ);

const rug2 = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);
console.log("rug2 =", rug2);

const ulPointer = document.querySelector("ul");
const header =
  "<li><strong>Type</strong></li><li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li><li><strong>OwnedBy</strong></li><li><strong>Electric</strong></li><li><strong>Tandem</strong></li>";

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  ulPointer.innerHTML = header;
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem}</li>`;
  });
}

// btn.addEventListener("click", (event) => {
//   if (event.classList.contains(".elbiler")) {
//     showTheseVehicles(elVe);
//   } else if (event.classList.contains(".seats")) {
//     showTheseVehicles(veSeats);
//   } else if (event.classList.contains(".elJon")) {
//     showTheseVehicles(elveJ);
//   } else if (event.classList.contains(".rug")) {
//     showTheseVehicles(rug2);
//   }
// });

elbiler.addEventListener("click", () => {
  showTheseVehicles(elVe);
  active();
  elbiler.classList.add("active");
});

rug.addEventListener("click", () => {
  showTheseVehicles(rug2);
  active();
  rug.classList.add("active");
});

seats.addEventListener("click", () => {
  showTheseVehicles(veSeats);
  active();
  seats.classList.add("active");
});

eljon.addEventListener("click", () => {
  showTheseVehicles(elveJ);
  active();
  eljon.classList.add("active");
});
seAlle.addEventListener("click", () => {
  showTheseVehicles(vehicles);
  active();
});

function active() {
  rug.classList.remove("active");
  seats.classList.remove("active");
  eljon.classList.remove("active");
  elbiler.classList.remove("active");
}
