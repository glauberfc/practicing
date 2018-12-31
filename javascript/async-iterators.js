// Sync iterator
function createStore() {
  const tables = {
    customer: {
      1: { name: 'John' },
      2: { name: 'Matias' },
      3: { name: 'Kim' },
    },
    food: {
      1: ['cake', 'waffle'],
      2: ['coffe'],
      3: ['apple', 'carrot'],
    },
  }

  return {
    get: (table, id) => tables[table][id],
  }
}

const store = createStore()

const customers = {
  [Symbol.iterator]: () => {
    let i = 0

    return {
      next() {
        i++

        const customer = store.get('customer', i)

        if (!customer) return { done: true }

        customer.food = store.get('food', i)

        return {
          value: customer,
          done: false,
        }
      },
    }
  },
}

for (customer of customers) {
  customer
}

const iterator = customers[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// Async iterator
function createAsyncStore() {
  const tables = {
    customer: {
      1: { name: 'John' },
      2: { name: 'Matias' },
      3: { name: 'Kim' },
    },
    food: {
      1: ['cake', 'waffle'],
      2: ['coffe'],
      3: ['apple', 'carrot'],
    },
  }

  return {
    get: (table, id) => delay(500).then(() => tables[table][id]),
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const asyncStore = createAsyncStore()

const asyncCustomers = {
  [Symbol.iterator]: () => {
    let i = 0

    return {
      next: async () => {
        i++

        const customer = await asyncStore.get('customer', i)

        if (!customer) return { done: true }

        customer.food = await store.get('food', i)

        return {
          value: customer,
          done: false,
        }
      },
    }
  },
}

console.log(
  (async function() {
    const iterator = asyncCustomers[Symbol.iterator]()
    const customer1 = (await iterator.next()).value
    const customer2 = (await iterator.next()).value
    const customer3 = (await iterator.next()).value

    for await (const customer of asyncCustomers) {
      customer
    }
  })()
)
