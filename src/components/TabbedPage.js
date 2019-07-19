import React, { Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import "react-tabs/style/react-tabs.css";
import StudentMenu from './StudentMenu'
import StudentPage from './StudentPage'

const Sidebar = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 250px;
  border-right: 2px solid black;
  margin-left: 10px;
`

class TabbedPage extends Component {
  render() {
    const tabs = this.props.allTabs.map((tab, i) =>
      <Tab key={i}>{tab}</Tab>
    )
    return(
      <div style={{display: 'flex'}}>
        <Sidebar>
          <StudentMenu sidebar={true} />
        </Sidebar>
        <Tabs style={{width: '100%'}}>
          <TabList>
            {tabs}
          </TabList>

          <TabPanel>
            <div className="app-body">
              <StudentMenu sidebar={false} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="app-body">
              <StudentPage />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default TabbedPage;
