//CardList.js is in charge of displaying a list of card without having to copy and 
//paste <Card /> every time in "index.js" for every new robot
import React from 'react';
import Card from './Card';

//map can take in two arguments and map must have a "key" prop so that it's easier for the DOM
//to keep track of the card elements if they are deleted or added
//the key prop should actually be something that doesn't change like id but for illustration's sake
//we use i for now
const CardList = ({ robots }) => {
	//throws an error to test the ErrorBoundary component.
	if(true) {
		throw new Error('NOOOOOOO!')
	}

	const cardsArray = robots.map((user, i) => {
		/*all the spacing is unecessary but makes it more readable. Wrap in curly brackets for returning multiple items.*/
		return (
			<Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
			/>
		)
	})
	return (
		/*
		<div>
			<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
	      	<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
	      	<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
      	</div>
      	*/
      	<div>
      		{ cardsArray }
      	</div>
	);
}

export default CardList;