export default function getRandomColor() {
  const colors = [
    '#2ecc71',
    '#9b59b6',
    '#2980b9',
    '#e67e22',
    '#f1c40f',
    '#d35400',
    '#f39c12',
    '#16a085',
    '#3498db'
  ]

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor
}