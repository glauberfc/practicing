// const co = require('co')
const fetch = require('node-fetch')

run(function* () {
  const uri = 'http://jsonplaceholder.typicode.com/posts/1'
	console.log('I\'m before response') 
  const response = yield fetch(uri)
  console.log('Is there a response? => ', !!response)
  console.log('I\'m after response')
	const post = yield response.json()
	//console.log('Post title: ', postTitle)
  return post.title
})
.catch(error => console.log(error.stack))
.then(x => console.log('Run resulted in => ', x))

/* function run(generator) {
  const iterator = generator()
  const iteration = iterator.next()
  const promise = iteration.value
  promise.then(res => {
    const anotherIteration = iterator.next(res)
    console.log('Another iteration: ', anotherIteration)
    const anotherPromise = anotherIteration.value
    anotherPromise.then(post => iterator.next(post.title)) 
  })
}*/

function run(generator) {
  const iterator = generator()
  function iterate(iteration) {
    if (iteration.done) return iteration.value
    //console.log('Is done the iteration?:', iteration) 
    const promise = iteration.value
    return promise.then(x => iterate(iterator.next(x)))
  }
  return iterate(iterator.next())
}
