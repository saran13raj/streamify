import React from 'react';

import { dataColumns } from 'entities/dashboard/data-columns';

import { DataTable } from 'shared/components/data-table';
import { useUnit } from 'effector-react';
import { dashboardEntityModel } from 'entities/dashboard';

export const RecentStreams: React.FC = () => {
	const recentStreams = useUnit(dashboardEntityModel.$recentStreams);

	return (
		<div className=' flex-1 flex-col space-y-4 md:flex'>
			<div className='flex items-center justify-between space-y-2'>
				<div>
					<h2 className='text-xl font-bold tracking-tight'>Recent Streams</h2>
				</div>
			</div>
			<DataTable data={recentStreams} columns={dataColumns} />
		</div>
	);
};
