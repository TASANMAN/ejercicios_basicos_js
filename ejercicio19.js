const toys = [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 40, name: 'Rascador de gato' },
  { id: 40, name: 'FurReal Friends gato interactivo' },
  { id: 60, name: 'Nerf Blaster' },
  { id: 71, name: 'Sylvanian Families - Familia gato' }
]

// Crear un nuevo array para los juguetes que no contienen la palabra "gato"
const filteredToys = []

for (const toy of toys) {
  // Si el nombre del juguete no contiene la palabra "gato"
  if (!toy.name.includes('gato')) {
    filteredToys.push(toy)
  }
}

console.log(filteredToys)
