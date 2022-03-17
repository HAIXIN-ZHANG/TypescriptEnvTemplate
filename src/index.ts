import {
	learnersAndCoursesData,
	learnersAndCoursesFn,
} from './learnersAndCourses'

import { mockData, correctAnswers, checkEasiestQuestionFn } from './quizResults'

import {
	checkTheMostCommonNextCourseFn,
	mockCourseData,
} from './watchedCourses'

import {
	countMaximumNumberOfConcurrentStreams,
	mockUserData,
} from './concurrentLearners'

console.log('quiz 1', learnersAndCoursesFn(learnersAndCoursesData))
console.log('quiz 2', checkEasiestQuestionFn(correctAnswers, mockData))
console.log('quiz 3', checkTheMostCommonNextCourseFn(mockCourseData))
console.log('quiz 4', countMaximumNumberOfConcurrentStreams(mockUserData))
