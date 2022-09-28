// https://www.omnicalculator.com/everyday-life/cycle-time

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cycletimeRadio = document.getElementById('cycletimeRadio');
const availableproductiontimeRadio = document.getElementById('availableproductiontimeRadio');
const producedRadio = document.getElementById('producedRadio');

let cycletime;
let availableproductiontime = v1;
let produced = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

cycletimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Available production time';
  variable2.textContent = 'Produced';
  availableproductiontime = v1;
  produced = v2;
  result.textContent = '';
});

availableproductiontimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Cycle time';
  variable2.textContent = 'Produced';
  cycletime = v1;
  produced = v2;
  result.textContent = '';
});

producedRadio.addEventListener('click', function() {
  variable1.textContent = 'Cycle time';
  variable2.textContent = 'Available production time';
  cycletime = v1;
  availableproductiontime = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cycletimeRadio.checked)
    result.textContent = `Cycle time = ${computecycletime().toFixed(2)}`;

  else if(availableproductiontimeRadio.checked)
    result.textContent = `Available production time = ${computeavailableproductiontime().toFixed(2)}`;

  else if(producedRadio.checked)
    result.textContent = `Produced = ${computeproduced().toFixed(2)}`;
})

// calculation

function computecycletime() {
  return (Number(availableproductiontime.value) / Number(produced.value)) * 60;
}

function computeavailableproductiontime() {
  return (Number(cycletime.value) / 60) * Number(produced.value);
}

function computeproduced() {
  return Number(availableproductiontime.value) / (Number(cycletime.value) / 60);
}