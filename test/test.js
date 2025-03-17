import { expect } from "chai";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { values } from "../values.js";
import { checkResult } from "../utils/checkResult.js";

describe("getRandomNumber", () => {
  it("should return a random number between 1 and values length", () => {
    const result = getRandomNumber(1, values.length);
    expect(result).to.be.at.least(1);
    expect(result).to.be.at.most(values.length);
  });
});

describe("checkResult", () => {
  const testCases = [
    { id1: 1, id2: 1, expected: 0 }, // Rock vs Rock (tie)
    { id1: 1, id2: 2, expected: 2 }, // Rock vs Paper (Paper wins)
    { id1: 1, id2: 3, expected: 1 }, // Rock vs Scissors (Rock wins)
    { id1: 2, id2: 1, expected: 1 }, // Paper vs Rock (Paper wins)
    { id1: 2, id2: 2, expected: 0 }, // Paper vs Paper (tie)
    { id1: 2, id2: 3, expected: 2 }, // Paper vs Scissors (Scissors wins)
    { id1: 3, id2: 1, expected: 2 }, // Scissors vs Rock (Rock wins)
    { id1: 3, id2: 2, expected: 1 }, // Scissors vs Paper (Scissors wins)
    { id1: 3, id2: 3, expected: 0 }, // Scissors vs Scissors (tie)
  ];

  //With Lizard and Spock
  // const testCases = [
  //   { id1: 1, id2: 1, expected: 0 }, // Rock vs Rock (tie)
  //   { id1: 1, id2: 2, expected: 2 }, // Rock vs Paper (Paper wins)
  //   { id1: 1, id2: 3, expected: 1 }, // Rock vs Scissors (Rock wins)
  //   { id1: 1, id2: 4, expected: 1 }, // Rock vs Lizard (Rock wins)
  //   { id1: 1, id2: 5, expected: 2 }, // Rock vs Spock (Spock wins)
  //   { id1: 2, id2: 1, expected: 1 }, // Paper vs Rock (Paper wins)
  //   { id1: 2, id2: 2, expected: 0 }, // Paper vs Paper (tie)
  //   { id1: 2, id2: 3, expected: 2 }, // Paper vs Scissors (Scissors wins)
  //   { id1: 2, id2: 4, expected: 2 }, // Paper vs Lizard (Lizard wins)
  //   { id1: 2, id2: 5, expected: 1 }, // Paper vs Spock (Paper wins)
  //   { id1: 3, id2: 1, expected: 2 }, // Scissors vs Rock (Rock wins)
  //   { id1: 3, id2: 2, expected: 1 }, // Scissors vs Paper (Scissors wins)
  //   { id1: 3, id2: 3, expected: 0 }, // Scissors vs Scissors (tie)
  //   { id1: 3, id2: 4, expected: 1 }, // Scissors vs Lizard (Scissors wins)
  //   { id1: 3, id2: 5, expected: 2 }, // Scissors vs Spock (Spock wins)
  //   { id1: 4, id2: 1, expected: 2 }, // Lizard vs Rock (Rock wins)
  //   { id1: 4, id2: 2, expected: 1 }, // Lizard vs Paper (Lizard wins)
  //   { id1: 4, id2: 3, expected: 2 }, // Lizard vs Scissors (Scissors wins)
  //   { id1: 4, id2: 4, expected: 0 }, // Lizard vs Lizard (tie)
  //   { id1: 4, id2: 5, expected: 1 }, // Lizard vs Spock (Lizard wins)
  //   { id1: 5, id2: 1, expected: 1 }, // Spock vs Rock (Spock wins)
  //   { id1: 5, id2: 2, expected: 2 }, // Spock vs Paper (Paper wins)
  //   { id1: 5, id2: 3, expected: 1 }, // Spock vs Scissors (Spock wins)
  //   { id1: 5, id2: 4, expected: 2 }, // Spock vs Lizard (Lizard wins)
  //   { id1: 5, id2: 5, expected: 0 }, // Spock vs Spock (tie)
  // ];

  testCases.forEach(({ id1, id2, expected }) => {
    it(`should return ${expected} on id1: ${id1} vs id2: ${id2}`, () => {
      const result = checkResult(id1, id2, values);
      expect(result).to.be.equal(expected);
    });
  });
});
