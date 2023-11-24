import Zombie from '../class/Zombie';

test('Zombie damage', () => {
  const zombie = new Zombie('zombie');
  zombie.damage(10);
  const result = {
    attack: 40, defence: 10, health: 91, level: 1, name: 'zombie', type: 'Zombie',
  };
  expect(zombie).toEqual(result);
});

test('Zombie damage health is 0', () => {
  const zombie = new Zombie('zombie');
  zombie.damage(150);
  const result = {
    attack: 40, defence: 10, health: 0, level: 1, name: 'zombie', type: 'Zombie',
  };
  expect(zombie).toEqual(result);
});


test('Zombie levelUP', () => {
  const zombie = new Zombie('zombie');
  zombie.levelUp();
  const result = {
    attack: 48, defence: 12, health: 100, level: 2, name: 'zombie', type: 'Zombie',
  };
  expect(zombie).toEqual(result);
});


test('Zombie levelUP for 0 health', () => {
  const zombie = new Zombie('zombie');
  zombie.health = 0;
  expect(() => {zombie.levelUp()}).toThrow(new Error('Невозможно повысить уровень, персонаж умер!'));
});