export type Metrics = {
	value: string;
	info: string;
};

export type DashboardMetrics = {
	revenue: Metrics;
	totalUsers: Metrics;
	activeUsers: Metrics;
	totalStreams: Metrics;
	topArtist: Metrics;
};

export type UserGrowth = { month: string; desktop: number; mobile: number };

export type TopStreams = { song: string; desktop: number; mobile: number };

export type RevenueDistribution = { type: string; amount: number; fill?: string };

export type RecentStream = {
	userID: string;
	name: string;
	artist: string;
	dateStreamed: string;
	streamCount: string;
	topRevenueSource: string;
};
