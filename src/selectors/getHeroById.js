import { heroes } from '../data/heroes'

const getHeroesById = (id) => heroes.filter((hero) => hero.id === id)

export default getHeroesById
