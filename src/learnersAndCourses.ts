const myJson = `
{
    
        "Learner-0001": [
          "Course-0001",
          "Course-0002",
          "Course-0003"
        ],
        "Learner-0002": [
          "Course-0002",
          "Course-0003",
          "Course-0004"
        ],
        "Learner-0003": [
          "Course-0004",
          "Course-0005",
          "Course-0006"
        ],
        "Learner-0004": [
          "Course-0005",
          "Course-0006",
          "Course-0007"
        ]
      
}
`
export const learnersAndCoursesData: LearnerData = JSON.parse(myJson)

interface LearnerData {
	learner: string[]
}

export const learnersAndCoursesFn = (learnerData: LearnerData): string[] => {
	const dataStore: string[] = []
	const courseCountStore: number[] = []
	const outPut: string[] = []

	const helpFn = (courseData: string[]) => {
		courseData.forEach((course: string) => {
			const index = dataStore.findIndex((data) => data === course)
			if (index === -1) {
				dataStore.push(course)
				courseCountStore.push(1)
			} else {
				courseCountStore[index]++
			}
		})
	}

	Object.values(learnerData).forEach((courseData: string[]) => {
		helpFn(courseData)
	})

	courseCountStore.filter((courseCount, index) => {
		if (courseCount === 1) return outPut.push(dataStore[index])
		return false
	})

	return outPut
}
