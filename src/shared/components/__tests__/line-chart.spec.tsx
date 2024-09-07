import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { LineChartCustom } from '../line-chart';

import { CustomChart } from 'shared/types';

jest.mock('recharts', () => ({
	Line: () => <div data-testid='mock-line' />,
	LineChart: ({ children }: { children: React.ReactNode }) => (
		<div data-testid='mock-line-chart'>{children}</div>
	),
	CartesianGrid: () => <div data-testid='mock-cartesian-grid' />,
	XAxis: () => <div data-testid='mock-x-axis' />
}));

describe('LineChartCustom', () => {
	const mockProps: CustomChart = {
		title: 'Test user growth',
		description: 'Jan - Dec 2013',
		footer: {
			title: 'Up by 13%',
			description: 'past 12 months'
		},
		data: [
			{ month: 'January Test', total: 186, active: 80 },
			{ month: 'February Test', total: 305, active: 200 },
			{ month: 'March Test', total: 237, active: 120 }
		],
		dataKey: 'month'
	};

	it('should render the component with correct title and description', () => {
		render(<LineChartCustom {...mockProps} />);

		expect(screen.getByText('Test user growth')).toBeInTheDocument();
		expect(screen.getByText('Jan - Dec 2013')).toBeInTheDocument();
	});

	it('should render the footer with correct information', () => {
		render(<LineChartCustom {...mockProps} />);

		expect(screen.getByText('Up by 13%')).toBeInTheDocument();
		expect(screen.getByText('past 12 months')).toBeInTheDocument();
	});

	it('should render the chart elements', () => {
		render(<LineChartCustom {...mockProps} />);

		expect(screen.getByTestId('mock-line-chart')).toBeInTheDocument();
		expect(screen.getByTestId('mock-cartesian-grid')).toBeInTheDocument();
		expect(screen.getByTestId('mock-x-axis')).toBeInTheDocument();

		const lines = screen.getAllByTestId('mock-line');

		expect(lines.length).toEqual(2);
		expect(lines[0]).toBeInTheDocument();
	});
});
