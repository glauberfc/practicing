const dragons = ['cool dragon', 'angry dragon', 'nasty dragon']

const iterator = dragons[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

for (const dragon of dragons) {
  dragon
}

for (const char of dragons[0]) {
  char
}

const randomNumber = require('random-number')

function randomItem(array) {
  const randomIdex = randomNumber({
    min: 0,
    max: array.length - 1,
    integer: true,
  })

  return array[randomIdex]
}

function makeDragon() {
  const dragonSizes = ['big', 'medium', 'tiny']

  const dragonAbilities = ['fire', 'ice', 'lightning']

  return `${randomItem(dragonSizes)} ${randomItem(dragonAbilities)} dragon`
}

console.log(makeDragon())

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughDragonSpawned = Math.random() > 0.75

        if (!enoughDragonSpawned) {
          return {
            value: makeDragon(),
            done: false,
          }
        }

        return {
          done: true,
        }
      },
    }
  },
}

for (const dragon of dragonArmy) {
  dragon
}
