import { render, screen } from '@testing-library/react';

import { MetricsCard } from '../metrics-card';

describe('MetricsCard', () => {
	const title = 'Revenue';
	const icon = <span data-testid='icon'>icon</span>;
	const units = '$10,000';
	const description = 'Total revenue for the month';

	test('renders the MetricsCard with correct title, units, and description', () => {
		render(<MetricsCard title={title} icon={icon} units={units} description={description} />);

		expect(screen.getByText(title)).toBeInTheDocument();

		expect(screen.getByTestId('icon')).toBeInTheDocument();

		expect(screen.getByText(units)).toBeInTheDocument();

		expect(screen.getByText(description)).toBeInTheDocument();
	});
});
