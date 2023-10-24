import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RepoList from '../repoList/RepoList';
import Scroll from '../scroll/Scroll';

function UserCards({ user }) {
	const [profileData, setProfileData] = useState({});
	const [viewRepos, setViewRepos] = useState(false);

	useEffect(() => {
		getUserProfile();
	}, []);

	async function getUserProfile() {
		const { url: profileUrl } = user;
		try {
			const response = await axios.get(profileUrl, {
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const { data: profile } = response;
			if (profile) setProfileData(profile);
		} catch (error) {
			console.error(error);
		}
	}

	const toggleView = () => {
		setViewRepos(!viewRepos);
	};

	return (
		<>
			{profileData && (
				<>
					<Card.Body data-testid={'user-data'}>
						<Card.Title>
							<span>
								<b>Name:</b> <i> {profileData.name}</i>
								<br />
								<b>Username: </b> <i>{profileData.login}</i>
								<br />
								<b>Bio: </b> <i>{profileData.bio ? profileData.bio : 'N/A'}</i>
							</span>
						</Card.Title>
						<hr />
						<Card.Body>
							<Card.Text>
								<span>
									<b>Followers: </b>
									{profileData.followers}
								</span>
								<br />
								<span>
									<b>Total Public Repositories: </b>
									{profileData.public_repos}
								</span>
							</Card.Text>
						</Card.Body>
						<Button onClick={toggleView}>
							{viewRepos ? 'Hide All' : 'View Top'} 10 repos
						</Button>
						<Card.Body>
							{viewRepos && (
								<Scroll heightInVh={'30vh'}>
									{' '}
									<RepoList repoUrl={profileData.repos_url} />
								</Scroll>
							)}
						</Card.Body>
					</Card.Body>
				</>
			)}
		</>
	);
}

export default UserCards;
