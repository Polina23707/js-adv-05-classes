import Character from '../class/Character';


test('Character name created correctly', () => {
  const zombie1 = new Character('Зомби', 'Zombie');
  expect(zombie1.name).toBe('Зомби');
});

test('Character name from 2 to 10 symbols', () => {
  expect(() => new Character('Супер-зомби', 'Zombie')).toThrow(new Error('Имя персонажа должно быть строкой от 2 до 10 символов!'));
});

test('Character type is from the list', () => {
  expect(() => new Character('Дракон', 'Dragon')).toThrow(new Error('Тип персонажа задан не верно!'));
});