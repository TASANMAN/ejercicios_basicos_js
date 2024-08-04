//2.1
const jedi = { nombre: 'Luke Skywalker', edad: 19 }
// Actualizar la edad de Luke Skywalker a 25 años
jedi.edad = 25
console.log(jedi)

//2.2
// Variables
let nombre = 'Leia'
let apellido = 'Organa'
let edad = 20

// Concatenación
let mensaje =
  'Soy ' +
  nombre +
  ' ' +
  apellido +
  ', tengo ' +
  edad +
  ' años y soy una princesa de Alderaan.'
console.log(mensaje)

//2.3
// Nombres
const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }

// Precio
const precioTotal = sable1.precio + sable2.precio

// Resultado por consola
console.log('El coste total de los sables de luz es: ' + precioTotal)

//2.4
// Modificacion variable
let precioBaseGlobal = 25000

// Nuevo precio final calculado
const nave1 = {
  nombre: 'Ala-X',
  precioBase: 50000,
  precioFinal: 50000 + precioBaseGlobal // Actualizar el precioFinal
}

const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 70000 + precioBaseGlobal // Actualizar el precioFinal
}

// Resultados por consola
console.log('Precio final de la nave', nave1.nombre, 'es:', nave1.precioFinal)
console.log('Precio final de la nave', nave2.nombre, 'es:', nave2.precioFinal)
