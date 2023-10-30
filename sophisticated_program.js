/**
 * Filename: sophisticated_program.js
 * 
 * Description: This code demonstrates a sophisticated program that uses object-oriented programming,
 *              asynchronous functions, event handling, and other advanced concepts.
 * 
 * It simulates a virtual pet game where the player can interact with their pet by feeding, playing,
 * and putting it to sleep. The pet's attributes change based on these interactions, and the player
 * can also trigger events like the pet getting sick or finding a treasure.
 */

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 50;
    this.energy = 100;
    this.happiness = 75;
  }

  async updateAttributes() {
    while (true) {
      await this.sleep(2000);
      this.hunger += 5;
      this.energy -= 10;
      this.happiness += 2;

      if (this.hunger >= 100 || this.energy <= 0 || this.happiness <= 0) {
        console.log('Game Over! Your pet has died.');
        break;
      }
    }
  }

  feed() {
    if (this.hunger <= 0) {
      console.log(`${this.name} is already full!`);
    } else {
      this.hunger -= 10;
      this.energy += 5;
      console.log(`${this.name} has been fed!`);
    }
  }

  play() {
    if (this.energy <= 0) {
      console.log(`${this.name} is too tired to play!`);
    } else {
      this.energy -= 10;
      this.happiness += 10;
      console.log(`${this.name} has been played with!`);
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async startGame() {
    console.log('Welcome to the virtual pet game!');
    console.log('Take care of your pet by feeding, playing, and putting it to sleep.');

    await this.updateAttributes();

    console.log('Thanks for playing!');
  }
}

class GameEvent {
  constructor(name, probabilityPercentage, callback) {
    this.name = name;
    this.probabilityPercentage = probabilityPercentage;
    this.callback = callback;
  }
}

class Game {
  constructor() {
    this.pet = null;
    this.events = [
      new GameEvent('Sickness', 5, () => {
        console.log(`${this.pet.name} is feeling sick!`);
        this.pet.happiness -= 10;
      }),
      new GameEvent('Treasure', 2, () => {
        console.log(`Congratulations! ${this.pet.name} has found a treasure!`);
        this.pet.happiness += 20;
      }),
    ];
  }

  startGame() {
    const playerName = prompt('Enter your pet\'s name: ');
    this.pet = new Pet(playerName);

    console.log(`Your pet ${this.pet.name} has been created.`);

    this.pet.startGame();
  }

  triggerRandomEvent() {
    const randomEvent = this.events.find(
      (event) => Math.random() <= event.probabilityPercentage / 100
    );

    if (randomEvent) {
      randomEvent.callback();
    }
  }
}

const game = new Game();
game.startGame();

document.getElementById('feed-button').addEventListener('click', () => {
  game.pet.feed();
});

document.getElementById('play-button').addEventListener('click', () => {
  game.pet.play();
});

document.getElementById('sleep-button').addEventListener('click', () => {
  console.log(`${game.pet.name} is asleep. Zzz...`);
  game.pet.energy += 50;
  game.triggerRandomEvent();
});

document.getElementById('status-button').addEventListener('click', () => {
  console.log(`${game.pet.name}'s Stats:`);
  console.log(`Hunger: ${game.pet.hunger}`);
  console.log(`Energy: ${game.pet.energy}`);
  console.log(`Happiness: ${game.pet.happiness}`);
});