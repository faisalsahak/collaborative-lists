import React, {Component} from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleCardList from '../containers/VisibleCardList'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ActionListContainer from '../containers/ActionListContainer.jsx'
import fetch from 'isomorphic-fetch'
import NavBar from './NavBar.jsx'


class TodoApp extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="panel-container">
          <Tabs
            onSelect={this.handleSelect}
            selectedIndex={0}
          >
            <TabList>
              <Tab>List</Tab>
              <Tab>History</Tab>
            </TabList>

            <TabPanel>
              <AddTodo />
              <VisibleCardList />
              <Footer />
            </TabPanel>
            <TabPanel>
              <ActionListContainer />
            </TabPanel>
          </Tabs>
        </div>
      </div>
   );
  }
}
export default TodoApp;
