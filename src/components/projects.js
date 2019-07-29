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
        <div><h1>This is AngleHack 2019</h1></div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Machine Learning</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is Webscraper</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is RubiksPaint</h1></div>
      )
    } else if(this.state.activeTab === 4) {
      return (
        <div><h1>This is Hack112</h1></div>
      )
    }
  }
  
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>AngelHack 2019</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Webscraper</Tab>
          <Tab>RubiksPaint</Tab>
          <Tab>Hack112</Tab>
        </Tabs>
      </div>
    );
  }
}
export default Project;