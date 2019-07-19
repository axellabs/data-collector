// Action Types

export const ADD_STUDENT = 'ADD_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'

export const ADD_GRADE = 'ADD_GRADE'

// Action Creators

export function addStudent(studentInfo) {
  return {type: ADD_STUDENT, studentInfo}
}

export function deleteStudent(studentID) {
  return {type: DELETE_STUDENT, studentID}
}

export function addGrade(gradeInfo) {
  return {type: ADD_GRADE, gradeInfo}
}
