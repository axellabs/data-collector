import React from 'react';
import '../styles/App.scss'

import StudentMenu from './StudentMenu'

function App() {
  return (
    <div className="app-body">
      <h1>Student Data Collector </h1>
      <StudentMenu />
    </div>
  );
}

export default App;
