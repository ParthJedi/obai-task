import React from 'react';
import { Card, Image } from 'react-bootstrap';
import UserCards from '../userCard/UserCards';

function Cards({ usersList }) {
	const userCards = usersList.map((user) => {
		return (
			<>
				<Card key={user.id} style={{ padding: '1em', margin: '0.5em' }}>
					<Image
						style={{ width: '100px' }}
						roundedCircle={true}
						src={user.avatar_url}
					/>
					<UserCards user={user} />
				</Card>
			</>
		);
	});
	return <>{userCards}</>;
}

export default Cards;
