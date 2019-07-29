import React, { Component } from 'react';
import { Tabs, Tab} from "react-mdl";
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div><h1>This is Python</h1></div>
      )
    }
  }
  
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>Python</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Webscraper</Tab>
          <Tab>AngelHack 2019</Tab>
        </Tabs>
      </div>
    );
  }
}
export default Project;