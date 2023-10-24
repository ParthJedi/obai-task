import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function RepoList({ repoUrl }) {
	const [repoData, setRepoData] = useState([]);
	useEffect(() => {
		getRepoData();
	}, []);

	async function getRepoData() {
		try {
			const response = await axios.get(repoUrl, {
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const { data: repositoryList } = response;
			const shortList = repositoryList.slice(0, 10);
			if (shortList.length) setRepoData(shortList);
		} catch (error) {
			toast.warning(error.message, {
				position: toast.POSITION.BOTTOM_LEFT
			});
		}
	}

	const repoDetailsList = repoData.map((repo) => (
		<>
			<div key={repo.id} data-testid={'repo-item'}>
				<p>
					<b>Name:{repo.name}</b>
				</p>
				<p>
					<i>Description:{repo.description ? repo.description : 'N/A'}</i>
				</p>
			</div>
		</>
	));

	return <>{repoDetailsList}</>;
}

export default RepoList;
