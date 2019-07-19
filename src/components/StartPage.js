import React from 'react'
import StudentMenu from './StudentMenu'

function StartPage() {
  return(
    <div className="app-body">
      <h1>Student Data Collector </h1>
      <StudentMenu sidebar={false} />
    </div>
  )
}

export default StartPage
