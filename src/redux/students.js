const initialState = [
  {
    "studentID": "3879",
    "firstName": "John",
    "lastName": "Smith",
    "gradeLevel": 3,
    "teacher": "Patterson, James"
  },
  {
    "studentID": "3880",
    "firstName": "Mary",
    "lastName": "Sanchez",
    "gradeLevel": 3,
    "teacher": "Patterson, James"
  },
  {
    "studentID": "3881",
    "firstName": "Sue",
    "lastName": "Reed",
    "gradeLevel": 2,
    "teacher": "Parker, Kelly"
  },
  {
    "studentID": "3882",
    "firstName": "David",
    "lastName": "Miller",
    "gradeLevel": 4,
    "teacher": "Torres, Morgan"
  },
  {
    "studentID": "3883",
    "firstName": "Elijah",
    "lastName": "Brown",
    "gradeLevel": 5,
    "teacher": "Bell, Howard"
  }
]

function studentReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      return initialState.push(action.studentInfo)
    default:
      return state
  }
}

export default studentReducer
