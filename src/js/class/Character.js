// TODO: write your code here

export default class Character {
  constructor(name , type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!((typeof name) === 'string' && name.length >= 2 && name.length <= 10)) {
      throw new Error('Имя персонажа должно быть строкой от 2 до 10 символов!');
    }

    if (!types.includes(type)) {
      throw new Error('Тип персонажа задан не верно!');
    }

    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level = this.level + 1;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
      this.health = 100;
    } else {
      throw new Error('Невозможно повысить уровень, персонаж умер!');
    }   
  }

  damage(points) {
    if (this.health >= 0) {
      let demage = points * (1 - this.defence / 100);
      if (demage <= this.health) {
        this.health = this.health - demage;
      } else {
        this.health = 0;
      }
    }
  }
}