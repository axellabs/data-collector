import React, { Component } from 'react';
import '../styles/App.scss'

import StartPage from './StartPage'
import TabbedPage from './TabbedPage'


class App extends Component {
  state = {
    openPages: ['Menu', 'wow']
  }

  openStudent = (studentName) => {
    this.setState({
      openPages: this.state.openPages.push(studentName)
    })
  }

  render() {
    return (
      <div className="app-body">
        {this.state.openPages.length > 1 ?
          <TabbedPage allTabs={this.state.openPages} addStudent={this.openStudent} /> :
          <StartPage addStudent={this.openStudent}/>
        }
      </div>

    );
  }
}

export default App;
