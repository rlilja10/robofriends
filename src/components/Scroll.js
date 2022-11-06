import React from 'react';

/*creates a reusable function that can add a scroll feature to another function or
component's children*/
const Scroll = (props) => {
	return (
		<div style={{ overflow: 'scroll', border: '5px solid black', height: '1000px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;