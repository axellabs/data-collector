import React from 'react'
import StudentMenu from './StudentMenu'

function StartPage() {
  return(
    <>
      <h1>Student Data Collector </h1>
      <StudentMenu sidebar={false} />
    </>
  )
}

export default StartPage
