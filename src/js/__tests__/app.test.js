import * as characters from '../app';


test('Character name created correctly', () => {
  const zombie1 = new characters.Character('Зомби', 'Zombie');
  expect(zombie1.name).toBe('Зомби');
});

test('Character name from 2 to 10 symbols', () => {
  const zombie1 = new characters.Character('Супер-зомби', 'Zombie');
  expect(zombie1).toThrow('Имя персонажа должно быть строкой от 2 до 10 символов!');
});

test('Character type is from the list', () => {
  const dragon1 = new characters.Character('Дракон', 'Dragon');
  expect(dragon1).toThrow(new Error('Тип персонажа задан не верно!'));
});

test('levelUp() to dead character', () => {
  const zombie1 = new characters.Character('Зомби', 'Zombie');
  zombie1.health = 0;
  expect(zombie1.levelUp()).toThrow(new Error('Невозможно повысить уровень, персонаж умер!'));
});

test('levelUp() to alive character level check', () => {
  const zombie1 = new characters.Character('Зомби', 'Zombie');
  zombie1.levelUp();
  expect(zombie1.level).toBe(2);
});

test('levelUp() to alive character defence check', () => {
  const zombie1 = new characters.Character('Зомби', 'Zombie');
  zombie1.levelUp();
  expect(zombie1.defence).toBe(12);
});

test('levelUp() to alive character attack check', () => {
  const zombie1 = new characters.Character('Зомби', 'Zombie');
  zombie1.levelUp();
  expect(zombie1.attack).toBe(48);
});

test('demage() to alive character', () => {
  const zombie1 = new characters.Character('Зомби', 'Zombie');
  zombie1.damage(20);
  expect(zombie1.health).toBe(82);
});

test('demage() to dead character', () => {
  const zombie1 = new characters.Character('Зомби', 'Zombie');
  zombie1.health = 0;
  zombie1.damage(20);
  expect(zombie1.health).toBe(0);
});

test.each([
  ['Зомби', 'Zombie'],
  ['Лучник', 'Bowerman'],
  ['Мечник', 'Swordsman'],
  ['Маг', 'Magician'],
  ['Демон', 'Daemon'],
  ['Живчик', 'Undead']
])(('Character type created correctly for %s'), 
(name, type) => {
  const character = new characters.Character(name, type);
  expect(character.type).toBe(type);
})

test('Health created correctly', () => {
  const zombie1 = new characters.Character('Зомби', 'Zombie');
  expect(zombie1.health).toBe(100);
});

test('Level created correctly', () => {
  const zombie1 = new characters.Character('Зомби', 'Zombie');
  expect(zombie1.level).toBe(1);
});

test.each([
  [new characters.Bowerman('Лучник', 'Bowerman'), 25, 25],
  [new characters.Swordsman('Мечник', 'Swordsman'), 40, 10],
  [new characters.Magician('Маг', 'Magician'), 40, 40],
  [new characters.Daemon('Демон', 'Daemon'), 10, 40],
  [new characters.Undead('Живчик', 'Undead'), 25, 25],
  [new characters.Zombie('Зомби', 'Zombie'), 40, 10]
])(('Character attack created correctly for %s'), 
(object, attack) => {
  expect(object.attack).toBe(attack);
})

test.each([
  [new characters.Bowerman('Лучник', 'Bowerman'), 25, 25],
  [new characters.Swordsman('Мечник', 'Swordsman'), 40, 10],
  [new characters.Magician('Маг', 'Magician'), 40, 40],
  [new characters.Daemon('Демон', 'Daemon'), 10, 40],
  [new characters.Undead('Живчик', 'Undead'), 25, 25],
  [new characters.Zombie('Зомби', 'Zombie'), 40, 10]
])(('Character defence created correctly for %s'), 
(object, attack, defence) => {
  expect(object.defence).toBe(defence);
})

