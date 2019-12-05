export const selectPoem = (person) => {
  switch(person) {
    case 'Hans':
      return 'Don’t mention the war. At the ministry of silly walks. Who’s that in Carre? I see. Oh my, it’s John Cleese!'
    case 'Paul':
      return 'This is an ex-parrot. But I’m not dead yet. I hope you can make it. Cause it is Cleese in Carre, for christ sake'
    case 'Els':
      return 'Peter Sagan. Wat is ie charment en fietsen dat ie kan, je wordt er vrolijk van. En het is ook nog eens. Een heel interessante man'
    case 'Cas':
    case 'Kees':
    case 'Iris':
    case 'Arianne':
    case 'Helen':
    case 'Frank':
    case 'Tom':
    case 'Niki':
      return 'Sint heeft geen idee. Het systeem weet het ook niet meer. Welke cadeau hij dit keer moet geven. Je hebt toch alles al in je leven? Neem dan maar een handje pepernoten. En je volgende bol pakketje is iets goedkoper.'
    default:
      return 'het systeem heeft even wat moeite door de schoorsteen te komen'
  }
}