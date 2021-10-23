import { heroes } from '../data/heroes'

const getHeroById = (id) => heroes.find((hero) => hero.id === id)

export default getHeroById
