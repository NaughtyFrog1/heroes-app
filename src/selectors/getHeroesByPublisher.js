import { heroes } from '../data/heroes'

const getHeroesByPublisher = (publisher) => {
  if (!['DC Comics', 'Marvel Comics'].includes(publisher)) {
    throw new Error(
      `'${publisher}'' is not a valid publisher. It must be 'DC Comics' or 'Marvel Comics'`
    )
  }
  return heroes.filter((hero) => hero.publisher === publisher)
}

export default getHeroesByPublisher
