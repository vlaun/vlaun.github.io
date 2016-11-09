var planets = [
    'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'
];

planets.splice(0, 0, "Sun");
console.log(planets);

planets.splice(planets.indexOf('Pluto') + 1, 0, 'Pluto');
console.log(planets);


