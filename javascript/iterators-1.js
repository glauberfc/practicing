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

const newDragonArmy = {
  [Symbol.iterator]: function*() {
    while (true) {
      const enoughDragonSpawned = Math.random() > 0.75
      if (!enoughDragonSpawned) return
      yield makeDragon()
    }
  },
}

for (const dragon of newDragonArmy) {
  dragon
}

// function* someDragons() {
//   while (true) {
//     const enoughDragonSpawned = Math.random() > 0.75
//     if (!enoughDragonSpawned) return
//     yield makeDragon()
//   }
// }

function someDragons() {
  let iterations = -1
  const iterator = {
    next() {
      iterations++

      if (iterations === 0) return { value: 'Fire dragon', done: false }
      if (iterations === 1) return { value: 'Ice dragon', done: false }
      if (iterations === 2) return { done: true }
      return { done: true }
    },
  }

  return iterator
}

const newIterator = someDragons()
newIterator
console.log(newIterator.next())
console.log(newIterator.next())
console.log(newIterator.next())
console.log(newIterator.next())

function* otherDragons() {
  yield 'Fire dragon'
  yield 'Water dragon'
  if (Math.random() > 0.5) {
    return
  }
  return 'Ice dragon'
}

const otherIterator = otherDragons()
console.log(otherIterator.next())
console.log(otherIterator.next())
console.log(otherIterator.next())
console.log(otherIterator.next())
