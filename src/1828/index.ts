export function countPoints(points: number[][], queries: number[][]): number[] {
  return queries.map((query) => {
    const radius = query[2];
    let count = 0;
    for (let point of points) {
      const dist = getDistance(query, point);
      if (radius >= dist) count++;
    }

    return count;
  });
}

export function getDistance(circle: number[], point: number[]) {
  return Math.sqrt(
    Math.pow(circle[0] - point[0], 2) + Math.pow(circle[1] - point[1], 2)
  );
}
