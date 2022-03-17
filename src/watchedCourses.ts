export const mockCourseData = [
	['Course_001', 'Course_002', 'Course_003', 'Course_004'],
	['Course_001', 'Course_003'],
	['Course_002', 'Course_004', 'Course_001'],
	['Course_004', 'Course_002', 'Course_003', 'Course_001'],
	['Course_004', 'Course_003', 'Course_002', 'Course_001'],
]

interface CourseChain {
	[course: string]: string
}

export const checkTheMostCommonNextCourseFn = (
	mockCourseData: string[][]
): CourseChain => {
	const dataStoreSet = new Set<string>()
	const dataStore: string[] = []
	const courseChain: CourseChain = {}

	let modifiedDataStore: string[]

	mockCourseData.forEach((data) => {
		dataStore.push(...data)
	})

	dataStore.forEach((data) => {
		dataStoreSet.add(data)
	})
	modifiedDataStore = Array.from(dataStoreSet)
	modifiedDataStore.sort()

	modifiedDataStore.forEach((data, index) => {
		if (index !== modifiedDataStore.length - 1) {
			courseChain[data] = modifiedDataStore[++index]
		}
	})

	return courseChain
}
