const inform = console.log
const {readJSONFile, writeJSONFile} = require('./src/helper')
const animals = readJSONFile('./data', 'animals.json')
const {create, index, show, destroy, update} = require('./src/animalController')

function run() {
    const action = process.argv[2]
    const animal = process.argv[3]
    let writeToFile = false
    let updatedAnimals = []

    switch (action) {
        case 'index':
            const animalsView = index(animals)
            inform(animalsView)
            break
        case 'create':
            inform(action, animal)
            updatedAnimals = create(animals, animal)
            writeToFile = true
            break
        case 'show':
            const animalView = show(animals, animal)
            inform(animalView)
            break 
        case 'update':
            updatedAnimals = edit(animals, animal, process.argv[4])
            writeToFile = true
            break
        case 'destroy':
            updatedAnimals = destroy(animals, animal)
            writeToFile = true
            break 
        case 'score':
            inform(`Current points sum of all animals you've added to your database:`, score(animals))
            break
        default:
            inform('There was an error.')

    }

    if (writeToFile) {
        writeJSONFile('./data', 'animals.json', updatedAnimals)
    }
}

run();