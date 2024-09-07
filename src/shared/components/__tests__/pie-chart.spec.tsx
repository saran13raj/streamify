import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PieChartCustom } from '../pie-chart';

jest.mock('recharts', () => ({
	Pie: () => <div data-testid='mock-pie' />,
	PieChart: ({ children }: { children: React.ReactNode }) => (
		<div data-testid='mock-pie-chart'>{children}</div>
	)
}));

describe('PieChartCustom', () => {
	const mockProps = {
		title: 'Test revenue',
		description: 'Past 15 days',
		footer: {
			title: 'Footer title',
			description: 'revenue distribution'
		},
		data: [
			{ name: 'Category 1', value: 100 },
			{ name: 'Category 2', value: 80 }
		],
		dataKey: 'value',
		nameKey: 'name'
	};

	it('should render the component with correct title and description', () => {
		render(<PieChartCustom {...mockProps} />);

		expect(screen.getByText('Test revenue')).toBeInTheDocument();
		expect(screen.getByText('Past 15 days')).toBeInTheDocument();
	});

	it('should render the footer with correct information', () => {
		render(<PieChartCustom {...mockProps} />);

		expect(screen.getByText('Footer title')).toBeInTheDocument();
		expect(screen.getByText('revenue distribution')).toBeInTheDocument();
	});

	it('should render the chart elements', () => {
		render(<PieChartCustom {...mockProps} />);

		expect(screen.getByTestId('mock-pie-chart')).toBeInTheDocument();
		expect(screen.getByTestId('mock-pie')).toBeInTheDocument();
	});
});
