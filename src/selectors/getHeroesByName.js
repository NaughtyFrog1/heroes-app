import { heroes } from '../data/heroes'

const getHeroesByName = (name) => {
  if (!name) return heroes;
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  )
}

export default getHeroesByName
