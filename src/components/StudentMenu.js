import React, { Component } from 'react'
import styled from 'styled-components'
import students from "../data/students"

const StudentCardStyled = styled.div`
  height: 40px;
  border: ${props => props.sidebar ? 'none' : '2px solid black'};
  border-left:  ${props => props.sidebar ? 'none' : '5px solid black'};
  padding-top: 20px;
  padding-left: 25px;
  margin-top: ${props => props.sidebar ? 0 : '30px'};
  margin-left: ${props => props.sidebar ? '-20px' : 0};
  transition: 0.3s;
  &:hover {
    color: #31afea;
    cursor: pointer;
    transform: ${props => props.sidebar ? 'none' : 'scale(1.01)'};
    transition: 0.3s;
  }
`

const AddStudentCardStyled = styled.div`
  height: 40px;
  border: ${props => props.sidebar ? 'none' : '2px solid black'};
  color: white;
  background-color: #000;
  padding-top: 20px;
  padding-left: 25px;
  margin-left: ${props => props.sidebar ? '-25px' : 0};
  transition: 0.3s;
  &:hover {
    background-color: #31afea;
    cursor: pointer;
    transform: ${props => props.sidebar ? 'none' : 'scale(1.01)'};
    transition: 0.3s;
  }
`

const AddStudentCard = (props) => (
  <AddStudentCardStyled sidebar={props.sidebar}>
    <h3> + Add Student </h3>
  </AddStudentCardStyled>
)

const StudentCard = (props) => (
  <StudentCardStyled sidebar={props.sidebar}>
    <h3>{[props.firstName, props.lastName].join(" ")}</h3>
  </StudentCardStyled>
)

class StudentMenu extends Component {
  render() {
    const studentCards = students.map(student =>
      <StudentCard
        key={student.studentID}
        sidebar={this.props.sidebar}
        firstName={student.firstName}
        lastName={student.lastName}
        />
    );

    return(
      <div>
        <h2> Students </h2>
        <AddStudentCard sidebar={this.props.sidebar} />
        {studentCards}
      </div>
    )
  }
}

export default StudentMenu
