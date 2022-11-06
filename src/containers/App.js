/*App.js is the overarching parent component of all the other components*/
import React, { Component } from 'react';
import CardList from '../components/CardList';
//import {robots} from '../robots.js';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

/*is an object that describes your application and state can change, props cannot*/
//const state = {
	//robots: robots,
	//searchfield: ''
//}

/*this creates a class which is necessary for using state*/
class App extends Component {
	constructor () {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		/*this makes an api call to the website and turns the response into a json that
		we can use. It then changes the state of robots to that json object*/
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ robots: users}));
	}

	/*whenever using your own functions, not pre-built ones, use the below syntax*/
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		/*rather than reporting the event on every change, the console will now reflect
		the value of what you're typing*/
		//console.log(event.target.value);
	}

	render() {
		const { robots, searchfield } = this.state;
		/*provides filtered robots after user input that CardList can use to update*/
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		//console.log(filteredRobots);

		/*This will show a Loading header if there's a lot of traffic and the website has yet
		to respond*/
		if (!robots.length) {
			return <h1> Loading </h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

//https://reactjs.org/docs/react-component.html
//above explains the three major components of the life cycle: Mounting, Updating, and Unmounting.
/*these are pre-built components that the React library provides and runs in order of declaration
in the app. If a component isn't in the app, React will ignore it and move to the next one.*/

//run 'npm run build' on the Terminal to build the app into a usable format for a website use
//it creates a 'build' folder that can be used with optimized files

export default App;