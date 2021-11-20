
const anime = ['Tokyo Avengers', 'Mythic Spirit: The Chronicles', 'Sword masters', 'One-punch man', 'Tokyo Ghoul'];

for (let i = 0; i < anime.length; i += 2) {
  console.log('Logging anime: ', anime[i]);
}

const myAnimeArray = [
  { id: 1, name: "Tokyo Avengers" },
  { id: 2, name: "Mythic Spirit: The Chronicles" },
  { id: 3, name: "Sword masters" },
  { id: 4, name: "One-punch man" },
  { id: 5, name: "Tokyo Ghoul" },
]

myAnimeArray.find(element => element.id === 1)
myAnimeArray.find(element => element.id === 2)
myAnimeArray.find(element => element.id === 3)
myAnimeArray.find(element => element.id === 4)
myAnimeArray.find(element => element.id === 5)