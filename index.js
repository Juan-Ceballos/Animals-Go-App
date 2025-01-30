const inform = console.log
const {readJSONFile, writeJSONFile} = require('./src/helper')
const animals = readJSONFile('./data', 'animals.json')

function run() {
    const action = process.argv[2]
    const animal = process.argv[3]
    switch (action) {
        case 'index':
            inform(action, animals)
            break
        case 'create':
            inform(action, animal)
            break
        case 'show':
            inform(action, animal)
            break 
        case 'update':
            inform(action, animal)
            break
        case 'destroy':
            inform(action, animal)
            break 
        case 'score':
            inform(action)
            break
        default:
            inform('There was an error.')

    }
}
