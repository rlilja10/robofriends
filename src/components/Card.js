//Card.js is in charge of displaying the card information
//necessary for running React
import React from 'react';

const Card = (props) => {
	const { name, email, id } = props
	return (
		//br=border, pa=padding, ma=margin, grow=growing animation, bw=blackwhite, shadow=shadow
		//you could do props.id, props.name, and props.email but you can also define it beforehand to decrease the clutter
		//you can also make it cleaner by replacing "(props)" with "({ name, email, id })"
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			{/*This is how to comment in JSX and '?' is used to add attributes to an item like W and H*/}
			<img alt='robot_photos' src={`https://robohash.org/${id}?200x200`} /> {/*the "`" is necessary to destructure*/}
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;

