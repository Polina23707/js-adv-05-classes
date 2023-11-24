import Bowerman from '../class/Bowerman';

test('Bowerman damage', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.damage(10);
  const result = {
    attack: 25, defence: 25, health: 92.5, level: 1, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});

test('Bowerman damage health is 0', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.damage(150);
  const result = {
    attack: 25, defence: 25, health: 0, level: 1, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});


test('Bowerman levelUP', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.levelUp();
  const result = {
    attack: 30, defence: 30, health: 100, level: 2, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});


test('Bowerman levelUP for 0 health', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.health = 0;
  expect(() => {bowerman.levelUp()}).toThrow(new Error('Невозможно повысить уровень, персонаж умер!'));
});