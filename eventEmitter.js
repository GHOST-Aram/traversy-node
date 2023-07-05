import { EventEmitter } from 'node:events'
const eventEmitter = new EventEmitter()

export class Emitter {
    addListener = (listener, handler) =>{
        new EventEmitter().addListener(listener, handler)
    }

    prependListener = (listener, handler)=>{
        new EventEmitter().prependListener(listener, handler)
    }

    emit = (listener, param) =>{
        eventEmitter.emit(listener, param)
    }

    setMaxListeners = (max) =>{
        eventEmitter.setMaxListeners(max)
    }
    on = (listener, handler) => {
        eventEmitter.on(listener, handler)
    }
}


const kill = (name) => console.log(`${name} is dead.`)
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