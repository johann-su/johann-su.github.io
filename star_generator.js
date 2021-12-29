let svgns = "http://www.w3.org/2000/svg"

let parendNode = document.getElementById('stars');

let i = 0
while (i < randomIntBetween(5, 20)) {
  i = i+1

  const starNode = document.createElementNS(svgns, 'polygon')
  const position = { x: randomIntBetween(10, 1920), y: randomIntBetween(10,600) }
  const scale = randomIntBetween(1,100)/100;
  starNode.classList.add('star')
  
  starNode.setAttribute('fill', '#ffd700')
  starNode.setAttribute('points', generateShape(position))
  starNode.setAttribute('transform', `scale(${scale})`)
  starNode.setAttribute('z-index', '1')
  starNode.innerHTML = `<animateTransform attributeName="transform" type="rotate" from="0 ${position.x+50+scale} ${position.y+100 + scale}" to="360 ${position.x+50 + scale} ${position.y+100 + scale}" dur="4s" repeatCount="indefinite" />`
  parendNode.appendChild(starNode)
}

function generateShape(position) {
  const edges = randomIntBetween(4, 30)
 
  const size = randomIntBetween(0, 50)

  var innerRadius = 50;
  var outerRadius = 100;
  var numPoints = edges;
  var center = Math.max(innerRadius, outerRadius);
  var angle  = Math.PI / edges;
  var points = [];  
  
  for (var i = 0; i < edges * 2; i++) {
    var radius = i & 1 ? innerRadius : outerRadius;  
    points.push(center + radius * Math.sin(i * angle) + position.x);
    points.push(center - radius * Math.cos(i * angle) + position.y);
  }

  return points.toString();
  
} 

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}