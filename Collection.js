import {Creation} from './Creation.js';
  
  // Create a class for the Collection model
  export class Collection {
    constructor(data) {
      this.user = data.user;
      this.name = data.name;
      this.creations = data.creations.map(creationId => new Creation(creationId));
      this.createdAt = data.createdAt;
    }
  
    getCreations = async () => {
      // Fetch creations from API and return an array of Creation objects
      // return fetch('/api/collections/' + this.name + '/creations')
      //   .then(response => response.json())
      //   .then(data => data.map(creation => new Creation(creation)));
      return [
        new Creation({
          user: '0x123',
          task: '0x456',
          uri: 'https://ipfs.io/ipfs/Qm...',
          attributes: {
            name: 'My Creation',
            description: 'This is my creation',
            image: 'https://ipfs.io/ipfs/Qm...',
          },
          createdAt: '2021-01-01T00:00:00Z',
        }),
        new Creation({
          user: '0x123323',
          task: '0x456323',
          uri: 'https://ipfs.io/ipfs/Qm...',
          attributes: {
            name: 'A My Creation',
            description: 'T111 222his is my creation asd',
            image: 'https://ipfs.isrfadsfdsfo/ipfs/Qm...',
          },
          createdAt: '2021-01-01T00:00:00Z',
        }),
      ]
    }
  }