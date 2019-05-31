/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// start of class
class GameObject {
    constructor (gameAtr){
    this.createdAt = gameAtr.createdAt;
    this.name = gameAtr.name;
    this.dimensions = gameAtr.dimensions;
  
   }
   destroy(){
    return `${this.name} was removed from the game`;
  }
  
}
    
   class CharacterStats extends GameObject {
   constructor (statsAtr){
    super(statsAtr)
    this.healthPoints = statsAtr.healthPoints;
    this.name = statsAtr.name;
  }
  
    takeDamage() {   
    return `${this.name} took damage.`
    }
  }

  class Humanoid extends GameObject {
  constructor (humanAtr){
      super(humanAtr)
    this.team = humanAtr.team;
    this.weapons = humanAtr.weapons;
    this.language = humanAtr.language;
    // CharacterStats.call(this, humanAtr)
  }
  greet(){
    return `${this.name} offers a greeting in ${this.language}`
    }
     }

 