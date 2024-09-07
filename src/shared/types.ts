export type CustomChart = {
	title: string;
	description: string;
	footer: {
		title: string;
		description: string;
	};
	data: any[];
	dataKey: string;
	nameKey?: string;
};
