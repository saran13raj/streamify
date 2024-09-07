import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';

import {
	dashboardMetricsData,
	revenueDistributionData,
	topStreamsData,
	userGrowthData
} from '../data';
import {
	DashboardMetrics,
	RecentStream,
	RevenueDistribution,
	TopStreams,
	UserGrowth
} from '../types';
import { fetchRecentStreamsAPI } from './api';

export const dashboardGate = createGate();

const domain = createDomain('entities/dashboard');

export const fetchRecentStreamsRequested = domain.event();

export const fetchRecentStreamsFx = domain.effect(fetchRecentStreamsAPI);

export const $dashboardMetrics = domain.store<DashboardMetrics>(dashboardMetricsData);
export const $userGrowthStats = domain.store<UserGrowth[]>(userGrowthData);
export const $topStreamsStats = domain.store<TopStreams[]>(topStreamsData);
export const $revenueStats = domain.store<RevenueDistribution[]>(revenueDistributionData);
export const $recentStreams = domain.store<RecentStream[]>([]);

$recentStreams.on(fetchRecentStreamsFx.doneData, (_, payload) => payload);

sample({
	clock: dashboardGate.open,
	target: fetchRecentStreamsRequested
});

sample({
	clock: fetchRecentStreamsRequested,
	target: fetchRecentStreamsFx
});
