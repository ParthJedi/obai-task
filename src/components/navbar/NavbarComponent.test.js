import { render, screen } from '@testing-library/react';
import NavbarComponent from './NavbarComponent';

describe('Navbar to have app title', () => {
	test('Title renders', () => {
		render(<NavbarComponent />);
		expect(
			screen.getByText('React | Integration Assignment')
		).toBeInTheDocument();
	});
});
