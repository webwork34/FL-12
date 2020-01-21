function Fighter({name, damage, hp, strength, agility}){
  this.getName = () => name;
  this.getDamage = () => damage;
  this.getHealth = () => hp;
  this.getStrength = () => strength;
  this.getAgility = () => agility;

  let maximumHP = this.getHealth();
  let gameWins = 0,
      gameLosses = 0;

  this.heal = amountHP => {
    hp = this.getHealth() + amountHP;
    if(hp > maximumHP){
      hp = maximumHP;
    }
  }

  this.dealDamage = amountHP => {
    hp = this.getHealth() - amountHP;
    if(hp < 0){
      hp = 0;
    }
  }

  this.addWin = () => gameWins++;
  this.addLoss = () => gameLosses++;
  
  this.attack = defender => {
    const hundred = 100;
    let success = (hundred - (defender.getAgility() + defender.getStrength())) / hundred;
    if(success >= Math.random()){
      defender.dealDamage(this.getDamage());
      console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
      if(defender.getHealth() === 0){
        console.log(`${this.getName()} has won!`);
        this.addWin();
        defender.addLoss();
      }
    }else{
      console.log(`${this.getName()} attack missed`);
    }
  }

  this.logCombatHistory = () => {
    let fightInfo = {
      name: this.getName(),
      wins: gameWins,
      losses: gameLosses
    }
    console.log(fightInfo);
  }
}

const battle = (fighter1, fighter2) => {
  if(fighter1.getHealth() === 0){
    console.warn(`${fighter1.getName()} is dead and can't fight`);
  }else if(fighter2.getHealth() === 0){
    console.warn(`${fighter2.getName()} is dead and can't fight`);
  }else{
    while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0){
      if(fighter2.getHealth() > 0 && fighter1.getHealth() > 0){
        fighter1.attack(fighter2);
      }else{
        break;
      }
      if(fighter1.getHealth() > 0 && fighter2.getHealth() > 0){
        fighter2.attack(fighter1);
      }else{
        break;
      }
    }
  }
}

const maximus = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15});
const comodus = new Fighter({name: 'Comodus', damage: 25, hp: 90, strength: 25, agility: 20});