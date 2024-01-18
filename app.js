const fs = require('fs');

const genders = ['male', 'female'];
let maleNames = [
  'James',
  'John',
  'Robert',
  'Michael',
  'William',
  'David',
  'Richard',
  'Joseph',
  'Thomas',
  'Charles',
];
let femaleNames = [
  'Mary',
  'Patricia',
  'Jennifer',
  'Linda',
  'Elizabeth',
  'Barbara',
];

let lastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Miller',
  'Davis',
  'Garcia',
  'Rodriguez',
  'Wilson',
];

let people = [];

const randChoice = (arr) => {
  let indexOfArr = Math.floor(Math.random() * arr.length);
  return arr[indexOfArr];
};

const generateRandomPhoneNumber = () => {
  const getRandomDigit = () => Math.floor(Math.random() * 10);

  let part1 = '';
  let part2 = '';
  let part3 = '';

  for (let i = 0; i < 3; i++) {
    part1 += getRandomDigit().toString();
    part2 += getRandomDigit().toString();
    part3 += getRandomDigit().toString();
  }

  return part1 + '-' + part2 + '-' + part3;
};

for (let i = 0; i < 10; i++) {
  const gender = randChoice(genders);
  let name = '';
  if (gender === 'male') {
    name = randChoice(maleNames);
  } else if (gender === 'female') {
    name = randChoice(femaleNames);
  }

  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const email = `${name.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  const phoneNumber = generateRandomPhoneNumber();

  const person = {
    gender: gender,
    name: name,
    lastName: lastName,
    age: Math.floor(Math.random() * 70 + 18),
    email: email,
    phone: phoneNumber,
  };

  people.push(person);
}

const json = JSON.stringify(people);

fs.writeFile('people.json', json, (err) => {
  if (err) {
    console.error('Something went wrong.');
    throw err;
  }
  console.log('The file has been saved!');
});
