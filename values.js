//To use Lizard and Spock remove comments to combinations and ids: 4, 5

export const values = [
  {
    id: 1,
    img: "🪨",
    name: "Rock",
    combinations: [
      3,
      // 4
    ], // Rock wins vs Scissors (3) and Lizard (4)
  },
  {
    id: 2,
    img: "🧻",
    name: "Paper",
    combinations: [
      1,
      // 5
    ], // Paper wins vs Rock (1) and Spock (5)
  },
  {
    id: 3,
    img: "✂️",
    name: "Scissor",
    combinations: [
      2,
      // 4
    ], // Scissors wins vs Paper (2) and Lizard (4)
  },
  // {
  //   id: 4,
  //   img: "🦎",
  //   name: "Lizard",
  //   combinations: [2, 5], // Lizard wins vs Paper (2) and Spock (5)
  // },
  // {
  //   id: 5,
  //   img: "🖖",
  //   name: "Spock",
  //   combinations: [3, 1], // Spock wins vs Scissors (3) and Rock (1)
  // },
];
