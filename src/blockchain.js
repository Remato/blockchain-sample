import { Block } from './block.js'

export class Blockchain {

  constructor() {
    this.blocks = [new Block()]
    this.nextIndex = 1
  }

  getLastHash() {
    return this.blocks[this.blocks.length - 1].hash
  }

  addBlock(data) {
    const lastHash = this.getLastHash()
    const newBlock = new Block(this.nextIndex, lastHash, data)
    this.blocks.push(newBlock)
    
    this.nextIndex++;
  }

  isValid() {
    for(let i = this.blocks.length; i > 0; i--) {
      const currentBlock = this.blocks[i]
      const previousBlock = this.blocks[i - 1]

      if(
        currentBlock.hash !== currentBlock.generateHash() ||
        currentBlock.previousHash !== previousBlock.hash ||
        currentBlock.index !== previousBlock.index + 1  
      ) {
        return false
      }
    }
  }
}