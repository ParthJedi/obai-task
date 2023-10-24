import { render, screen } from '@testing-library/react';
import PageContent from './PageContent';

describe('page-content', () => {
	test('it displays users list', async () => {
		render(<PageContent />);
		expect(screen.getByText('GitHub Users')).toBeInTheDocument();

		const userList = await screen.findByTestId('user-list');
		expect(userList).toBeInTheDocument();
	});
});
