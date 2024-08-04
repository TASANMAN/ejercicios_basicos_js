const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Spirited Away', durationInMinutes: 80 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 }
]

// Arrays para almacenar películas por categoría
const smallMovies = []
const mediumMovies = []
const largeMovies = []

// Recorrer el array de películas y clasificarlas
for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie)
  } else {
    largeMovies.push(movie)
  }
}

// Imprimir los arrays resultantes
console.log('Películas pequeñas (menos de 100 minutos):')
console.log(smallMovies)

console.log('Películas medianas (más de 100 minutos y menos de 200 minutos):')
console.log(mediumMovies)

console.log('Películas grandes (más de 200 minutos):')
console.log(largeMovies)
