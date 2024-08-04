//4.1
const aldeanos = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']
console.log(aldeanos[3]) // Posicion 3,empieza en 0
//4.2
aldeanos.push('Cervasio')
console.log(aldeanos)
//4.3
const aldeanos1 = [
  'Fibrilio',
  'Narciso',
  'Vacarena',
  'Tendo',
  'Nendo',
  'Cervasio'
]
aldeanos[0] = 'Bambina'
console.log(aldeanos)
//4.4
aldeanos1.reverse()
console.log(aldeanos1)
//4.5
const indice = aldeanos1.indexOf('Narciso') // Encuentra el índice de "Narciso"
if (indice !== -1) {
  // Asegúrate de que "Narciso" esté en el array
  aldeanos1.splice(indice, 1, 'Canela') // Reemplaza "Narciso" por "Canela"
}
console.log(aldeanos)
//4.6
console.log(aldeanos[aldeanos.length - 1])
