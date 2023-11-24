import Swordsman from '../class/Swordsman';

test('Swordsman damage', () => {
  const swordsman = new Swordsman('swordsman');
  swordsman.damage(10);
  const result = {
    attack: 40, defence: 10, health: 91, level: 1, name: 'swordsman', type: 'Swordsman',
  };
  expect(swordsman).toEqual(result);
});

test('Swordsman damage health is 0', () => {
  const swordsman = new Swordsman('swordsman');
  swordsman.damage(150);
  const result = {
    attack: 40, defence: 10, health: 0, level: 1, name: 'swordsman', type: 'Swordsman',
  };
  expect(swordsman).toEqual(result);
});


test('Swordsman levelUP', () => {
  const swordsman = new Swordsman('swordsman');
  swordsman.levelUp();
  const result = {
    attack: 48, defence: 12, health: 100, level: 2, name: 'swordsman', type: 'Swordsman',
  };
  expect(swordsman).toEqual(result);
});


test('Swordsman levelUP for 0 health', () => {
  const swordsman = new Swordsman('swordsman');
  swordsman.health = 0;
  expect(() => {swordsman.levelUp()}).toThrow(new Error('Невозможно повысить уровень, персонаж умер!'));
});