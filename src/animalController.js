const {nanoid} = require('nanoid')

function create(animals, animalName) {
    const animal = {name: animalName, id: nanoid(4)}
    animals.push(animal)
    return animals
}

module.exports = {
    create
}

