import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BarChartHorizontal } from '../bar-chart-horizontal';

import { CustomChart } from 'shared/types';

jest.mock('recharts', () => ({
	Bar: () => <div data-testid='mock-bar' />,
	BarChart: ({ children }: { children: React.ReactNode }) => (
		<div data-testid='mock-bar-chart'>{children}</div>
	),
	CartesianGrid: () => <div data-testid='mock-cartesian-grid' />,
	LabelList: () => <div data-testid='mock-label-list' />,
	XAxis: () => <div data-testid='mock-x-axis' />,
	YAxis: () => <div data-testid='mock-y-axis' />
}));

describe('BarChartHorizontal', () => {
	const mockProps: CustomChart = {
		title: 'Test Songs',
		description: 'Past 10 days',
		footer: {
			title: 'Footer title',
			description: 'Top 5 songs'
		},
		data: [
			{ song: 'WallFlowers Test', artist: 'The Chain Gang of 1974 Test', streams: 301 },
			{ song: 'Vampires Test', artist: 'The Midnight Test', streams: 277 },
			{ song: 'Choo Lo Test', artist: 'The Local Train Test', streams: 212 }
		],
		dataKey: 'song'
	};

	it('should render the component with correct title and description', async () => {
		render(<BarChartHorizontal {...mockProps} />);

		expect(screen.getByText('Test Songs')).toBeInTheDocument();
		expect(screen.getByText('Past 10 days')).toBeInTheDocument();
	});

	it('should render the footer with correct information', () => {
		render(<BarChartHorizontal {...mockProps} />);

		expect(screen.getByText('Footer title')).toBeInTheDocument();
		expect(screen.getByText('Top 5 songs')).toBeInTheDocument();
	});

	it('should render the chart elements', () => {
		render(<BarChartHorizontal {...mockProps} />);

		expect(screen.getByTestId('mock-bar-chart')).toBeInTheDocument();
		expect(screen.getByTestId('mock-cartesian-grid')).toBeInTheDocument();
		expect(screen.getByTestId('mock-y-axis')).toBeInTheDocument();
		expect(screen.getByTestId('mock-x-axis')).toBeInTheDocument();
		expect(screen.getByTestId('mock-bar')).toBeInTheDocument();
	});
});
