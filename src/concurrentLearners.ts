export const mockUserData = [
	['User_001', 0, 1000],
	['User_002', 500, 2000],
	['User_003', 2500, 3000],
	['User_004', 400, 1400],
	['User_001', 1100, 1800],
	['User_005', 1200, 1400],
	['User_006', 500, 2400],
	['User_003', 2100, 2300],
]

export const countMaximumNumberOfConcurrentStreams = (
	mockUserData: (string | number)[][]
): string => {
	let concurrentStreams = 0
	const endTimeStore: number[] = []
	const startTimeStore: number[] = []

	mockUserData.forEach((data: (string | number)[]) => {
		if (typeof data[2] === 'number') endTimeStore.push(data[2])
		if (typeof data[1] === 'number') startTimeStore.push(data[1])
	})

	endTimeStore.forEach((time) => {
		const numOfStreams = Math.min(
			startTimeStore.filter((t) => time > t).length,
			endTimeStore.filter((ti) => time < ti).length
		)
		if (numOfStreams > concurrentStreams) concurrentStreams = numOfStreams
	})

	return `The maximum number of concurrent streams is ${concurrentStreams}`
}
