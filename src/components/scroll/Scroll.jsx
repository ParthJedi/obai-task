import React from 'react';

function Scroll(props) {
	return (
		<div
			style={{
				height: `${props.heightInVh}`,
				overflowY: 'scroll',
				border: '1px solid grey',
				borderRadius: '2px'
			}}
		>
			{props.children}
		</div>
	);
}

export default Scroll;
