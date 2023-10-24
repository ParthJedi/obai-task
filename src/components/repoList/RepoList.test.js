import { render, screen } from '@testing-library/react';
import RepoList from './RepoList';

describe('check repository list', () => {
	test('repo list is present', async () => {
		render(<RepoList />);
		const repositoryLists = await screen.findAllByTestId('repo-item');
		expect(repositoryLists).toHaveLength(10);
	});
});
