import { render, screen } from '@testing-library/react';
import UserCards from './UserCards';

describe('check user data', () => {
	test('user data is present', async () => {
		render(<UserCards />);
		const userData = await screen.findByTestId('user-data');
		expect(userData).toBeInTheDocument();
	});
});
