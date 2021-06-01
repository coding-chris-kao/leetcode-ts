import { getDistance } from ".";

test("Test cases:", () => {
  const points = [
    [1, 3],
    [3, 3],
    [5, 3],
    [2, 2],
  ];
  const queries = [
    [2, 3, 1],
    [4, 3, 1],
    [1, 1, 2],
  ];

  expect(getDistance(queries[0], points[0])).toEqual(1);
  expect(getDistance(queries[0], points[1])).toEqual(1);
  expect(getDistance(queries[0], points[2])).toEqual(3);
  expect(getDistance(queries[0], points[3])).toEqual(1);
});
