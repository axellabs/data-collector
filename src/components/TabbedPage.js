import React, { Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import "react-tabs/style/react-tabs.css";
import StudentMenu from './StudentMenu'

const Sidebar = styled.div`
  height: 100vw;
  width: 250px;
  border-right: 2px solid black;
  margin-right: 35px;
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
            <StudentMenu sidebar={false} />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default TabbedPage;
