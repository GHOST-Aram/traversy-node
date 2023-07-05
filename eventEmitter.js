const EventEmitter = require('events')

const kill = (name) => console.log(`${name} is dead.`)

const eventEmitter = new EventEmitter()
eventEmitter.prependListener('violence  ', (someLaw) => {
    console.log('Registered: ', someLaw)
})
eventEmitter.addListener('start', (name) => kill(name))

eventEmitter.on('start', (name, age) =>{
    console.log(
        'Event Started', name, age , ' years'
    )
})
eventEmitter.on('start', (name) =>{
    console.log(
        'Event Started', name, ' years'
    )
})

eventEmitter.addListener('stop', (action, time) => {
    console.log(`Stop ${action} at ${time}`)
})

eventEmitter.once('silence', (action) =>{
    console.log('currently: ' , action)
})

eventEmitter.emit(
    'violence', ' Do not steal'
)

eventEmitter.setMaxListeners(20)
// eventEmitter.removeAllListeners('start')
eventEmitter.removeListener('start', (name) => kill(name))
eventEmitter.emit('silence', 'Waking')
eventEmitter.emit('start', 'Erick', 33)
eventEmitter.emit('start', 'Erick', 33)
eventEmitter.emit('start', 'Erick', 33)
eventEmitter.emit('stop', 'running', '1400hrs')
eventEmitter.emit('silence', 'Sleeping')
eventEmitter.emit('start', 'joy')

console.log(eventEmitter.eventNames())
console.log(eventEmitter.getMaxListeners())
console.log(eventEmitter.listenerCount('start'))
console.log(eventEmitter.listeners('stop'))
// eventEmitter.off('start')