export const myJson = `
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
			const index = dataStore.findIndex(course)
		})
	}

	Object.values(learnerData).forEach(() => {})

	console.log(typeof learnerData)
	return outPut
}
