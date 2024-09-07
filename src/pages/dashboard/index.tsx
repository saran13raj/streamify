import { useUnit } from 'effector-react';
import {
	AudioWaveformIcon,
	Disc3Icon,
	DollarSign,
	UserCheck2Icon,
	UsersRoundIcon
} from 'lucide-react';
import React from 'react';

import { dashboardEntityModel } from 'entities/dashboard';

import { BarChartHorizontal } from 'shared/components/bar-chart-horizontal';
import { LineChartCustom } from 'shared/components/line-chart';
import { MetricsCard } from 'shared/components/metrics-card';
import { PieChartCustom } from 'shared/components/pie-chart';

import { RecentStreams } from 'widgets/dashboard/recent-streams';

export const Dashboard: React.FC = () => {
	const dashboardMetrics = useUnit(dashboardEntityModel.$dashboardMetrics);
	const userGrowthStats = useUnit(dashboardEntityModel.$userGrowthStats);
	const topStreamsStats = useUnit(dashboardEntityModel.$topStreamsStats);
	const revenueStats = useUnit(dashboardEntityModel.$revenueStats);

	return (
		<>
			<dashboardEntityModel.dashboardGate />
			<div className='flex items-center justify-between space-y-2'>
				<h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
				<div className='flex items-center space-x-2'></div>
			</div>
			<div className='space-y-4'>
				<div className='mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4'>
					<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-5'>
						<MetricsCard
							title='Total Revenue'
							icon={<DollarSign className='h-4 w-4 text-muted-foreground' />}
							units={dashboardMetrics.revenue.value}
							description={`${dashboardMetrics.revenue.info} from last month`}
						/>
						<MetricsCard
							title='Total Users'
							icon={<UsersRoundIcon className='h-4 w-4 text-muted-foreground' />}
							units={dashboardMetrics.totalUsers.value}
							description={`${dashboardMetrics.totalUsers.info} from last month`}
						/>
						<MetricsCard
							title='Active Users'
							icon={<UserCheck2Icon className='h-4 w-4 text-muted-foreground' />}
							units={dashboardMetrics.activeUsers.value}
							description={`${dashboardMetrics.activeUsers.info} from last month`}
						/>
						<MetricsCard
							title='Songs Streamed'
							icon={<AudioWaveformIcon className='h-4 w-4 text-muted-foreground' />}
							units={dashboardMetrics.totalStreams.value}
							description={`${dashboardMetrics.totalStreams.info} from last month`}
						/>
						<MetricsCard
							title='Top Artist'
							icon={<Disc3Icon className='h-4 w-4 text-muted-foreground' />}
							units={dashboardMetrics.topArtist.value}
							description={`Previous month - ${dashboardMetrics.topArtist.info}`}
						/>
					</div>
				</div>
			</div>

			<div className='space-y-4 '>
				<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
					<LineChartCustom
						title='User Growth'
						description='January - December 2024'
						footer={{
							title: 'Growth up by 5.2% this month',
							description: 'Showing user growth for the last 12 months'
						}}
						data={userGrowthStats}
						dataKey='month'
					/>
					<BarChartHorizontal
						title='Most Streamed Songs'
						description='Past 30 days'
						footer={{
							title: '',
							description: 'Showing most streamed songs for the past 30 days'
						}}
						data={topStreamsStats}
						dataKey='song'
					/>
					<PieChartCustom
						title='Revenue Distribution'
						description='Past 30 days'
						footer={{
							title: '',
							description: 'Showing revenue distribution for the past 30 days'
						}}
						data={revenueStats}
						dataKey='amount'
						nameKey='type'
					/>
				</div>
			</div>
			<div className='space-y-4'>
				<RecentStreams />
			</div>
		</>
	);
};
