const animals = [
  {
    type: "Dog",
    mammal: true,
  },
  {
    type: "Snake",
    mammal: false,
  },
  {
    type: "Cheetah",
    mammal: true,
  },
];

const mammals = animals.filter((animal) => animal.mammal);

console.log(mammals);
