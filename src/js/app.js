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