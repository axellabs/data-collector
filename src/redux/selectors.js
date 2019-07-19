export const getAllStudents = store => store.studentReducer

export const getStudentByID = (store, id) => (
  store.studentReducer.filter(student => student.studentID === id)[0]
)
