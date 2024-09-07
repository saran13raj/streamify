import { useUnit } from 'effector-react';
import React from 'react';

import { dashboardEntityModel, dataColumns } from 'entities/dashboard';

import { DataTable } from 'shared/components/data-table';

export const RecentStreams: React.FC = () => {
	const recentStreams = useUnit(dashboardEntityModel.$recentStreams);
	const revenueSourceSelection = useUnit(dashboardEntityModel.$revenueSourceSelection);

	return (
		<div className=' flex-1 flex-col space-y-4 md:flex'>
			<div className='flex items-center justify-between space-y-2'>
				<div>
					<h2 className='text-xl font-bold tracking-tight'>Recent Streams</h2>
				</div>
			</div>
			<DataTable
				data={recentStreams}
				columns={dataColumns}
				facetSelected={revenueSourceSelection}
			/>
		</div>
	);
};
