import { HandCoinsIcon, MegaphoneIcon, UsersIcon } from 'lucide-react';

import { DashboardMetrics, RevenueDistribution, TopStreams, UserGrowth } from './types';

export const topRevenueSources = [
	{
		label: 'Advertisement',
		value: 'AD',
		icon: MegaphoneIcon
	},
	{
		label: 'Subscription',
		value: 'SUBSCRIPTION',
		icon: HandCoinsIcon
	},
	{
		label: 'Referral',
		value: 'REFERRAL',
		icon: UsersIcon
	}
];

export const dashboardMetricsData: DashboardMetrics = {
	revenue: {
		value: '$ 43,234.87',
		info: '+13%'
	},
	totalUsers: {
		value: '1234',
		info: '+21%'
	},
	activeUsers: {
		value: '789',
		info: '+31%'
	},
	totalStreams: {
		value: '989',
		info: '+7%'
	},
	topArtist: {
		value: 'LeBrock',
		info: 'The Midnight'
	}
};

export const userGrowthData: UserGrowth[] = [
	{ month: 'January', total: 186, active: 80 },
	{ month: 'February', total: 305, active: 200 },
	{ month: 'March', total: 237, active: 120 },
	{ month: 'April', total: 273, active: 190 },
	{ month: 'May', total: 209, active: 130 },
	{ month: 'June', total: 321, active: 140 },
	{ month: 'July', total: 114, active: 89 },
	{ month: 'August', total: 298, active: 176 },
	{ month: 'September', total: 199, active: 113 },
	{ month: 'October', total: 201, active: 112 },
	{ month: 'November', total: 444, active: 378 },
	{ month: 'December', total: 421, active: 389 }
];

export const topStreamsData: TopStreams[] = [
	{ song: 'WallFlowers', artist: 'The Chain Gang of 1974', streams: 301 },
	{ song: 'Vampires', artist: 'The Midnight', streams: 277 },
	{ song: 'Choo Lo', artist: 'The Local Train', streams: 212 },
	{ song: "'85 Again", artist: 'Robert Parker', streams: 199 },
	{ song: 'Dangerous Dreams', artist: 'LeBrock', streams: 178 }
];

export const revenueDistributionData: RevenueDistribution[] = [
	{ type: 'Subscriptions', amount: 275, fill: 'hsl(var(--chart-1))' },
	{ type: 'Advertisement', amount: 200, fill: 'hsl(var(--chart-2))' },
	{ type: 'Referral', amount: 187, fill: 'hsl(var(--chart-3))' }
];
