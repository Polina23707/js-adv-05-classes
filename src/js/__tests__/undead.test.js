import Undead from '../class/Undead';

test('Undead damage', () => {
  const undead = new Undead('undead');
  undead.damage(10);
  const result = {
    attack: 25, defence: 25, health: 92.5, level: 1, name: 'undead', type: 'Undead',
  };
  expect(undead).toEqual(result);
});

test('Undead damage health is 0', () => {
  const undead = new Undead('undead');
  undead.damage(150);
  const result = {
    attack: 25, defence: 25, health: 0, level: 1, name: 'undead', type: 'Undead',
  };
  expect(undead).toEqual(result);
});


test('Undead levelUP', () => {
  const undead = new Undead('undead');
  undead.levelUp();
  const result = {
    attack: 30, defence: 30, health: 100, level: 2, name: 'undead', type: 'Undead',
  };
  expect(undead).toEqual(result);
});


test('Undead levelUP for 0 health', () => {
  const undead = new Undead('undead');
  undead.health = 0;
  expect(() => {undead.levelUp()}).toThrow(new Error('Невозможно повысить уровень, персонаж умер!'));
});