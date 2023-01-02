import Team from '../team';

const player1 = {
  attack: 25,
  defence: 25,
  health: 100,
  level: 1,
  name: 'serg1',
  type: 'Bowman',
};

const player2 = {
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
  name: 'serg2',
  type: 'Daemon',
};

const player3 = {
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
  name: 'serg3',
  type: 'Zombie',
};

const player4 = {
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
  name: 'serg4',
  type: 'Magician',
};

test('add one player', () => {
  const expected = {};
  expected.members = new Set().add(player1);

  const received = new Team();
  received.add(player1);
  expect(received).toEqual(expected);
});

test('add one player recurring', () => {
  function onlyOnePlayer() {
    const team = new Team();
    team.add(player1);
    team.add(player2);
    team.add(player1);
  }

  expect(onlyOnePlayer).toThrowError(new Error('Игрок уже в команде'));
});

test('add all players', () => {
  const expected = {};
  expected.members = new Set().add(player1).add(player2).add(player3)
    .add(player4);

  const received = new Team();
  received.addAll(player1, player2, player3, player1, player4);
  expect(received).toEqual(expected);
});

test('array players', () => {
  const expected = [];
  expected.push(player1);
  expected.push(player2);
  expected.push(player3);
  expected.push(player4);

  const received = new Team();
  received.addAll(player1, player2, player3, player4);
  expect(received.toArray()).toEqual(expected);
});
