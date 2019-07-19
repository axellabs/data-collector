import React, { Component } from 'react'
import styled from 'styled-components'
import students from "../data/students"

const StudentCardStyled = styled.div`
  height: 40px;
  border: 2px solid black;
  border-left: 5px solid black;
  padding-top: 20px;
  padding-left: 25px;
  margin-top: 30px;
  transition: 0.3s;
  &:hover {
    color: #31afea;
    cursor: pointer;
    transform: scale(1.01);
    transition: 0.3s;
  }
`

const AddStudentCardStyled = styled.div`
  height: 40px;
  border: 2px solid black;
  color: white;
  background-color: #000;
  padding-top: 20px;
  padding-left: 25px;
  transition: 0.3s;
  &:hover {
    background-color: #31afea;
    cursor: pointer;
    transform: scale(1.01);
    transition: 0.3s;
  }
`

const AddStudentCard = (props) => (
  <AddStudentCardStyled>
    <h3> + Add Student </h3>
  </AddStudentCardStyled>
)

const StudentCard = (props) => (
  <StudentCardStyled>
    <h3>{[props.firstName, props.lastName].join(" ")}</h3>
  </StudentCardStyled>
)

class StudentMenu extends Component {
  render() {
    const studentCards = students.map(student =>
      <StudentCard key={student.studentID} firstName={student.firstName} lastName={student.lastName} />
    );

    return(
      <div>
        <h2> Students </h2>
        <AddStudentCard />
        {studentCards}
      </div>
    )
  }
}

export default StudentMenu
