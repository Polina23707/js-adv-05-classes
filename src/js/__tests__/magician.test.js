import Magician from '../class/Magician';

test('Magician damage', () => {
  const magician = new Magician('magician');
  magician.damage(10);
  const result = {
    attack: 10, defence: 40, health: 94, level: 1, name: 'magician', type: 'Magician',
  };
  expect(magician).toEqual(result);
});

test('Magician damage health is 0', () => {
  const magician = new Magician('magician');
  magician.damage(200);
  const result = {
    attack: 10, defence: 40, health: 0, level: 1, name: 'magician', type: 'Magician',
  };
  expect(magician).toEqual(result);
});


test('Magician levelUP', () => {
  const magician = new Magician('magician');
  magician.levelUp();
  const result = {
    attack: 12, defence: 48, health: 100, level: 2, name: 'magician', type: 'Magician',
  };
  expect(magician).toEqual(result);
});


test('Magician levelUP for 0 health', () => {
  const magician = new Magician('magician');
  magician.health = 0;
  expect(() => {magician.levelUp()}).toThrow(new Error('Невозможно повысить уровень, персонаж умер!'));
});