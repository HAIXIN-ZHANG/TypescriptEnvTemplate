const myJson = `
{
	"Learner-0001": [
	  "Course-0001",
	  "Course-0002",
	  "Course-0003",
	  "Course-0001",
	  "Course-0002",
	  "Course-0003"
	],
	"Learner-0002": [
	  "Course-0002",
	  "Course-0003",
	  "Course-0004"
	]
}
`

export const data = JSON.parse(myJson)

interface TLearnersAndCourses {
	student: string[]
}

export const learnersAndCoursesQuiz = (
	courseData: TLearnersAndCourses
): string[] => {
	const dataStore: string[] = []
	const courseCountStore: number[] = []
	const output: string[] = []

	const helpFn = (courseData: string[]) => {
		courseData.forEach((data: string) => {
			const courseIndex = dataStore.findIndex((d) => d === data)
			if (courseIndex === -1) {
				dataStore.push(data)
				courseCountStore.push(1)
			} else {
				courseCountStore[courseIndex]++
			}
		})
	}

	Object.values(courseData).forEach((data: string[]) => {
		const mySet = new Set<string>()
		let removeDuplicated: string[]
		data.forEach((d) => mySet.add(d))

		removeDuplicated = Array.from(mySet)

		helpFn(removeDuplicated)
	})

	courseCountStore.filter((courseCount, index) => {
		if (courseCount === 1) return output.push(dataStore[index])
		return false
	})

	console.log('dataStore', dataStore)
	console.log('courseCountStore', courseCountStore)
	return output
}
