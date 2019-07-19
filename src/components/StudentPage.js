import React, { Component } from 'react'
import styled from 'styled-components'
import { LineChart } from 'react-chartkick'
import 'chart.js'
import Calendar from 'react-calendar'

const StudentInfo = styled.div`
  border: 2px solid black;
  margin: 15px 0;
  padding: 5px 20px;
  font-size: 20px;
  .bold {
    font-weight: bold;
  }
`

const StudentGrades = styled.table`
  border: 2px solid black;
  border-collapse: collapse;
  width: 100%;
  tr {
    border-bottom: 1px solid black;
  }

  td {
    padding: 5px;
  }
`

class StudentPage extends Component {
  render() {
    return(
      <div>
        <h1> John Smith </h1>
        <h2>About</h2>
        <StudentInfo>
          <p><span className="bold">Grade Level: </span> 3</p>
          <p><span className="bold">Teacher:</span> Patterson</p>
          <p><span className="bold">Test Average:</span> 75</p>
        </StudentInfo>

        <h2>Grades</h2>
        <StudentGrades>
          <tbody>
          <tr>
            <td> 3/8/2019 </td>
            <td> Basic Math Test </td>
            <td> 65 </td>
          </tr>
          <tr>
            <td> 4/8/2019 </td>
            <td> Math Test </td>
            <td> 75 </td>
          </tr>
          <tr>
            <td> 5/18/2019 </td>
            <td> Math Test </td>
            <td> 75 </td>
          </tr>
          <tr>
            <td> 6/8/2019 </td>
            <td> Math Test </td>
            <td> 80 </td>
          </tr>
          <tr>
            <td> 7/8/2019 </td>
            <td> Math Test </td>
            <td> 85 </td>
          </tr>
          </tbody>
        </StudentGrades>
        <h2>Add Grades</h2>
        <Calendar/>
        <h2>Progress</h2>
        <LineChart
          suffix="%"
          data={{"2019-03-08": 65, "2019-04-08": 75, "2019-05-18": 75, "2019-06-08": 80, "2019-07-08": 85,}} />
      </div>
    )
  }
}

export default StudentPage
