import Character from '../character';

test('50 damage', () => {
  const bowman = new Character('kolia', 'bowman');
  bowman.damage(50);

  expect(bowman.health).toBe(70);
});

test('250 damage', () => {
  const bowman = new Character('kolia', 'bowman');
  bowman.damage(250);

  expect(bowman.health).toBe(0);
});