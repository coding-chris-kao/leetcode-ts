function numBusesToDestination(
  routes: number[][],
  source: number,
  target: number,
): number {
  if (source === target) return 0

  // Record all buses you can take for each stop
  const stopBoard = new Map<number, number[]>()
  for (let bus = 0; bus < routes.length; bus++) {
    const stops = routes[bus]
    for (let stop of stops) {
      if (!stopBoard.has(stop)) {
        stopBoard.set(stop, [bus])
      } else {
        stopBoard.get(stop)?.push(bus)
      }
    }
  }

  const queue = [source]
  const visited = new Set()
  let res = 0

  while (queue.length > 0) {
    res += 1

    const queueSize = queue.length
    for (let _ = 0; _ < queueSize; _++) {
      let curStop = queue.shift()
      for (let bus of stopBoard.get(curStop!)!) {
        if (visited.has(bus)) continue

        visited.add(bus)
        const stops = routes[bus]
        for (let stop of stops) {
          if (stop === target) return res
          queue.push(stop)
        }
      }
    }
  }

  return -1
}
