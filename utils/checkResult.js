export const checkResult = (id1, id2, values) => {
  if (+id1 === id2) return 0;
  const comb = values.filter((i) => i.id === +id1);
  return comb[0]?.combinations.includes(id2) ? 1 : 2;
};
