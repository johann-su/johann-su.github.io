let svgns = "http://www.w3.org/2000/svg"

let parendNode = document.getElementById('stars');

let i = 0
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get("amount"));
const startAmount =  urlParams.get("amount") ? urlParams.get("amount"): randomNumberBetween(5,20);
const startAmount_el = document.getElementById("stars_count");
startAmount_el.innerHTML="Stars: " + startAmount.toString();
const slider = document.getElementById("amount");
slider.value = urlParams.get("amount") ? urlParams.get("amount"): startAmount;

while (i < startAmount) {
  i = i+1

  const starNode = document.createElementNS(svgns, 'polygon')
  
  const position = { x: randomNumberBetween(10, 1920), y: randomNumberBetween(10,600) }
  
  const scale = randomNumberBetween(1,100)/100;
  starNode.classList.add('star')
  
  starNode.setAttribute('fill', '#ffd700')
  // starNode.setAttribute('filter', 'url(#star_glow)')
  starNode.setAttribute('points', generateShape(position, scale))

  starNode.innerHTML = `<animateTransform attributeName="transform" type="rotate" from="0 ${position.x + 100} ${position.y + 100}" to="360 ${position.x + 100} ${position.y + 100}" dur="4s" repeatCount="indefinite" />`
  
  parendNode.appendChild(starNode)
}

function generateShape(position, scale) {
  const edges = randomNumberBetween(4, 30)

  var innerRadius = 50;
  var outerRadius = 100;
  var center = Math.max(innerRadius, outerRadius);
  var angle  = Math.PI / edges;
  var points = [];  
  
  for (var i = 0; i < edges * 2; i++) {
    var radius = i & 1 ? innerRadius : outerRadius;  
    points.push((center + radius * Math.sin(i * angle) * scale) + position.x);
    points.push((center - radius * Math.cos(i * angle) * scale) + position.y);
  }

  return points.toString();
} 

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function reload(){
 
  let url = window.location.href;
  url = url.split("?amount=")[0]
  console.log('url: ' + url)
  window.location.href = url + "?amount=" + slider.value.toString();
}