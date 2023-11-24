import Daemon from '../class/Daemon';

test('Daemon damage', () => {
  const deamon = new Daemon('deamon');
  deamon.damage(10);
  const result = {
    attack: 10, defence: 40, health: 94, level: 1, name: 'deamon', type: 'Daemon',
  };
  expect(deamon).toEqual(result);
});

test('Daemon damage health is 0', () => {
  const deamon = new Daemon('deamon');
  deamon.damage(200);
  const result = {
    attack: 10, defence: 40, health: 0, level: 1, name: 'deamon', type: 'Daemon',
  };
  expect(deamon).toEqual(result);
});


test('Daemon levelUP', () => {
  const deamon = new Daemon('deamon');
  deamon.levelUp();
  const result = {
    attack: 12, defence: 48, health: 100, level: 2, name: 'deamon', type: 'Daemon',
  };
  expect(deamon).toEqual(result);
});


test('Daemon levelUP for 0 health', () => {
  const deamon = new Daemon('deamon');
  deamon.health = 0;
  expect(() => {deamon.levelUp()}).toThrow(new Error('Невозможно повысить уровень, персонаж умер!'));
});