export default function randomColor() {
  let colors = [
    '#49C4E5',
    '#8471F2',
    '#67E2AE',
    '#f1c40f',
    '#16a085',
    '#c0392b',
    '#bdc3c7'
  ]

  var color = colors[Math.floor(Math.random()*colors.length)];
  return color
}