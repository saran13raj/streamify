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
	{ month: 'January', desktop: 186, mobile: 80 },
	{ month: 'February', desktop: 305, mobile: 200 },
	{ month: 'March', desktop: 237, mobile: 120 },
	{ month: 'April', desktop: 73, mobile: 190 },
	{ month: 'May', desktop: 209, mobile: 130 },
	{ month: 'June', desktop: 214, mobile: 140 },
	{ month: 'July', desktop: 214, mobile: 140 },
	{ month: 'August', desktop: 214, mobile: 140 },
	{ month: 'September', desktop: 214, mobile: 140 },
	{ month: 'October', desktop: 214, mobile: 140 },
	{ month: 'November', desktop: 214, mobile: 140 },
	{ month: 'December', desktop: 214, mobile: 140 }
];

export const topStreamsData: TopStreams[] = [
	{ song: 'January', desktop: 186, mobile: 80 },
	{ song: 'February', desktop: 305, mobile: 200 },
	{ song: 'March', desktop: 237, mobile: 120 },
	{ song: 'April', desktop: 73, mobile: 190 },
	{ song: 'May', desktop: 209, mobile: 130 }
];

export const revenueDistributionData: RevenueDistribution[] = [
	{ type: 'Subscriptions', amount: 275, fill: 'hsl(var(--chart-1))' },
	{ type: 'Advertisement', amount: 200, fill: 'hsl(var(--chart-2))' },
	{ type: 'Referral', amount: 187, fill: 'hsl(var(--chart-3))' }
];
