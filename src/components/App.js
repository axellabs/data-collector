import React, { Component } from 'react';
import '../styles/App.scss'

import StartPage from './StartPage'
import TabbedPage from './TabbedPage'


class App extends Component {
  state = {
    openPages: ['Menu', 'John Smith']
  }

  openStudent = (studentName) => {
    this.setState({
      openPages: this.state.openPages.push(studentName)
    })
  }

  render() {
    return (
      <div>
        {this.state.openPages.length > 1 ?
          <TabbedPage allTabs={this.state.openPages} addStudent={this.openStudent} /> :
          <StartPage addStudent={this.openStudent}/>
        }
      </div>

    );
  }
}

export default App;
