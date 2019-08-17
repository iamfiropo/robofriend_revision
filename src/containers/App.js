import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../containers/ErrorBoundry';
import '../App.css';
import { changeSearchField, requestRobots } from '../actions';

/**
RETURN THE FUNCTION WITH () OR WITH RETURN STATEMENT BELOW
const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots, 
    isPending: state.requestRobots.isPending, 
    error: state.requestRobots.error
  })
 */
const mapStateToProps = state => {
  /**
    retrieve state of the application from the store i.e index.js
   */
    return {
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots, 
      isPending: state.requestRobots.isPending, 
      error: state.requestRobots.error
    }
  }

const mapDispatchToProps = dispatch => {
  /**
    These property key goes to the action creator functions in actions.js
   */
  return {
    onSearchChange: (event) => dispatch(changeSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  async componentDidMount() {
    this.props.onRequestRobots();
    // const response =  await fetch('http://jsonplaceholder.typicode.com/users')
    // const users = await response.json();
    // this.setState({ robots: users })

    // using .then() style
    // fetch('http://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState({ robots: users }))    
  }

  // onSearchChange = (event) => {
  //   this.setState({searchField: event.target.value});
  // }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {      
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
    <div className='tc'>
    {isPending 
      ?
      (<h1>LOADING</h1>)
      :
      (<div>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox 
          searchChange={onSearchChange}
        />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
      )}
    </div>
  );
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
