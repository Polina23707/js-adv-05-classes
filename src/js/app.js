// TODO: write your code here

export class Character {
  constructor(name , type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (!((typeof name) === 'string' && name.length >= 2 && name.length <= 10)) {
      throw new Error('Имя персонажа должно быть строкой от 2 до 10 символов!');
    }

    if (!['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Тип персонажа задан не верно!');
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level = this.level + 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
      this.health = 100;
    } else {
      throw new Error('Невозможно повысить уровень, персонаж умер!');
    }   
  }

  damage(points) {
    if (this.health >= 0) {
      this.health = this.health - Math.round(points * (1 - this.defence / 100));
    }
  }
}

export class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

// const zombie1 = new Zombie('Zombie', 'Zombie');
// console.log(zombie1.health);
// zombie1.damage(20);
// console.log(zombie1.health);
// zombie1.health = 0;
// console.log(zombie1.health);
// zombie1.levelUp();