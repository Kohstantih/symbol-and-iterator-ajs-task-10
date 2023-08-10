import Team from './Team';

const boxTeam = [{
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
},
{
  name: 'Мечник',
  type: 'Swordsman',
  health: 70,
  level: 1,
  attack: 40,
  defence: 10,
},
{
  name: 'Маг',
  type: 'Magician',
  health: 90,
  level: 1,
  attack: 10,
  defence: 40,
}];

const team = new Team(boxTeam);

for (const i of team) {
  if (team[i] === undefined) break;
  console.log(team[i]);
}
