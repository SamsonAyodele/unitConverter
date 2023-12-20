const input = document.getElementById("num");

const error = document.getElementById("error");

const meterHtml = document.getElementById("meter");
const feetHtml = document.getElementById("feet");
const meterHtml2 = document.getElementById("meter2");
const feetHtml2 = document.getElementById("feet2");

const literHtml = document.getElementById("liter");
const gallonHtml = document.getElementById("gallons");
const literHtml2 = document.getElementById("liter2");
const gallonHtml2 = document.getElementById("gallons2");

const kiloHtml = document.getElementById("kilo");
const poundHtml = document.getElementById("pound");
const kiloHtml2 = document.getElementById("kilo2");
const poundHtml2 = document.getElementById("pound2");

input.addEventListener("input", updateValue);

function updateValue(e) {
  const newValue = parseFloat(e.target.value);
  convertNumber(newValue);
}

// There are 3.28 foot in a meter
// 1 foot = 3.28meter i.e 1 meter * 3.28foot
// 1 meter = 1 foot / 3.28 , 1 foot / 3.28 = 0.305 meter
function feetToMeter(feet) {
  const meter = feet / 3.28084;
  console.log(
    `conversion of ${feet} feet to meter is: ${meter.toFixed(3)} meter.`
  );
  feetHtml.textContent = feet;
  meterHtml.textContent = meter.toFixed(3);
}

function meterToFeet(meter) {
  const feet = meter * 3.2808;
  console.log(`conversion of ${meter} meter to feet is: ${feet.toFixed(3)} feet.`);
  meterHtml2.textContent = meter;
  feetHtml2.textContent = feet.toFixed(3);
}

function literToGallon(liter) {
  const gallon = liter * 0.264172;
  console.log(
    `conversion of ${liter} liters to gallon is : ${gallon.toFixed(3)} gallons.`
  );
  literHtml.textContent = liter;
  gallonHtml.textContent = gallon.toFixed(3);
}

function gallonToLiter(gallon) {
  const liter = gallon / 0.264172;
  console.log(
    `conversion of ${gallon} gallons to liter is : ${liter.toFixed(3)} liters.`
  );
  gallonHtml2.textContent = gallon;
  literHtml2.textContent = liter.toFixed(3);
}

function kiloToPound(kilo) {
  const pound = kilo * 2.2046;
  console.log(
    `conversion of ${kilo} kilo to pound is : ${pound.toFixed(3)} pound.`
  );
  kiloHtml.textContent = kilo;
  poundHtml.textContent = pound.toFixed(3);
}

function poundToKilo(pound) {
  const kilo = pound / 0.2046;
  console.log(`conversion of ${pound} pound to kilo is : ${kilo.toFixed(3)} kilo.`);
  poundHtml2.textContent = pound;
  kiloHtml2.textContent = kilo.toFixed(3);
}

function convertNumber(value) {

  if (isNaN(value)) {
    // console.log("Not a Number!");
   return  error.textContent = "Not a Number";
  } else {
    error.textContent = "";

    meterToFeet(value);
    feetToMeter(value);

    literToGallon(value);
    gallonToLiter(value);

    poundToKilo(value);
    kiloToPound(value);
  }
}

// function convertNumber(value) {
//   if (isNaN(value)) {
//       console.log("Not a Number!");
//       error.textContent = "Not a Number";
//   } else {
//       error.textContent = "";
//       meterToFeet(value);
//       feetToMeter(value);
//       literToGallon(value);
//       gallonToLiter(value);
//       poundToKilo(value);
//       kiloToPound(value);
//   }
// }
// console.log(convertNumber(input.value))
