const quotes = [
  "J’voulais juste ton love, pas tes larmes.",
  "J’suis dans l’futur mais mon cœur est resté bloqué sur toi.",
  "T'es mon océan, j’me noie dans tes yeux.",
  "J’voulais faire ma vie, mais c’est avec toi que j’la vois.",
  "L’amour, c’est donner son cœur et attendre qu’elle le brise pas.",
  "On s’aimait en silence, et c’était plus fort que tout.",
  "T’es mon poème, ma plus belle rime, mon plus beau texte.",
  "T’as illuminé mes jours sombres, t’es mon étoile dans la nuit.",
  "J’peux avoir tout l’argent du monde, mais sans toi j’suis pauvre.",
  "J’peux pas t’promettre la lune, mais j’te promets d’être là."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {

  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear()
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length)
    
    if (usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
  }

}