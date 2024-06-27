import sha256 from 'crypto-js/sha256.js'

export class Block {
  
  constructor(index = 0, previousHash = null, data = 'Genesis Block') {
    this.index = index;
    this.data = data;
    this.timestamp = new Date();
    this.previousHash = previousHash;

    this.hash = this.generateHash();
  }

  generateHash() {
    return sha256(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp).toString()
  }
}