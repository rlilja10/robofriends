import React from 'react';
/*good idea to wrap things in divs in case you want to add things later.
in one way data flow, the children communicate with the parent and the parent
tells them if anything has changed.*/

const SearchBox = ({ searchChange }) => {
	return (
		/*pa2 is Tachyon for "padding 2"*/
		<div className='pa2'> 
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;