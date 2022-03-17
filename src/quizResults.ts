export const mockData = [
	['A', 'B', 'B', 'C', 'D'],
	['C', 'B', 'A', 'D', 'B'],
	['A', 'B', 'C', 'D', 'C'],
	['B', 'B', 'A', 'D', 'A'],
	['A', 'B', 'D', 'B', 'D'],
	['C', 'A', 'A', 'D', 'A'],
	['A', 'B', 'C', 'D', 'C'],
	['B', 'D', 'A', 'A', 'A'],
	['A', 'B', 'D', 'D', 'D'],
	['C', 'B', 'A', 'D', 'B'],
	['A', 'C', 'C', 'D', 'A'],
	['B', 'B', 'A', 'D', 'A'],
	['A', 'B', 'D', 'C', 'D'],
]

export const correctAnswers = ['A', 'B', 'A', 'C', 'D']

export const checkEasiestQuestionFn = (
	correctAnswers: string[],
	mockData: string[][]
): string => {
	let easiestQuestionIndex: number
	const countCorrectAnswer = new Array(correctAnswers.length).fill(0)

	const helpFn = (correctAnswers: string[], learnerResponse: string[]) => {
		correctAnswers.forEach((answer, index) => {
			if (answer === learnerResponse[index]) {
				countCorrectAnswer[index]++
			}
		})
	}

	mockData.forEach((data) => {
		helpFn(correctAnswers, data)
	})

	easiestQuestionIndex = countCorrectAnswer.indexOf(
		Math.max(...countCorrectAnswer)
	)

	console.log('countCorrectAnswer', countCorrectAnswer)
	return `The easiest question is index ${easiestQuestionIndex}`
}
