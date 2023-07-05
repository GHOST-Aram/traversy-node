import { EventEmitter } from 'node:events'

export class Emitter {
    #eventEmitter = new EventEmitter()

    addListener = (event, handler) =>{
        this.#eventEmitter.addListener(event, handler)
    }

    emit = (event, param) =>{
        this.#eventEmitter.emit(event, param)
    }

    getEventNames = () =>{
        return this.#eventEmitter.eventNames()
    }

    getMaxListeners = () =>{
        return this.#eventEmitter.getMaxListeners()
    }

    getListeners = (event) =>{
        return this.#eventEmitter.listeners(event)
    }

    listenerCount = (event) =>{
        return this.#eventEmitter.listenerCount(event)
    }

    on = (event, handler) => {
        this.#eventEmitter.on(event, handler)
    }

    once = (event, handler) =>{
        this.#eventEmitter.once(event, handler)
    }

    prependListener = (event, handler)=>{
        this.#eventEmitter.prependListener(event, handler)
    }
    
    removeListener = (event, handler) =>{
        this.#eventEmitter.removeListener(event, handler)
    }

    setMaxListeners = (max) =>{
        this.#eventEmitter.setMaxListeners(max)
    }
}