import { Blockchain } from './blockchain.js'

const blockchain = new Blockchain()
blockchain.addBlock({ from: 'a', to: 'b', amount: 1 })

console.log(blockchain)