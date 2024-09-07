import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useUnit } from 'effector-react';

import { dashboardEntityModel, dataColumns } from 'entities/dashboard';

import { DataTable } from 'shared/components/data-table';

import { RecentStreams } from '../';

jest.mock('effector-react', () => ({
	useUnit: jest.fn()
}));

jest.mock('shared/components/data-table', () => ({
	DataTable: jest.fn(() => <div data-testid='mock-data-table' />)
}));

jest.mock('entities/dashboard', () => ({
	dashboardEntityModel: {
		$recentStreams: 'mocked-recent-streams',
		$dashboardMetrics: 'mocked-dashboard-metrics',
		$revenueSourceSelection: ['']
	},
	dataColumns: ['col1', 'col2', 'col3', 'col4', 'col5']
}));

const mockRecentStreams = [
	{
		userID: 'mock1',
		name: 'Synthetic1',
		artist: 'The Midnight1',
		dateStreamed: '2023-08-15T14:23:10Z',
		streamCount: '1561',
		topRevenueSource: 'SUBSCRIPTION'
	}
];

describe('RecentStreams', () => {
	beforeEach(() => {
		jest.clearAllMocks();

		(useUnit as jest.Mock).mockImplementation((store) => {
			if (store === dashboardEntityModel.$recentStreams) {
				return mockRecentStreams;
			}
			if (store === dashboardEntityModel.$revenueSourceSelection) {
				return [''];
			}
			return null;
		});
	});

	it('should render the component with correct title', () => {
		render(<RecentStreams />);
		expect(screen.getByText('Recent Streams')).toBeInTheDocument();
	});

	it('should render the DataTable component', () => {
		render(<RecentStreams />);
		expect(screen.getByTestId('mock-data-table')).toBeInTheDocument();
	});

	it('should pass correct props to DataTable', () => {
		render(<RecentStreams />);
		expect(DataTable).toHaveBeenCalledWith(
			{ data: mockRecentStreams, columns: dataColumns, facetSelected: [''] }, // needed props
			{} // additional props
		);
	});

	it('should use the correct store from dashboardEntityModel', () => {
		render(<RecentStreams />);
		expect(useUnit).toHaveBeenCalledWith(dashboardEntityModel.$recentStreams);
	});

	it('should fail for dashboardMetrics', () => {
		render(<RecentStreams />);
		expect(useUnit).not.toHaveBeenCalledWith(dashboardEntityModel.$dashboardMetrics);
	});
});
