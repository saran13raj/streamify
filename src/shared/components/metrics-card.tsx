import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from './shadcn/ui/card';

export const MetricsCard: React.FC<{
	title: string;
	icon: React.ReactNode;
	units: string;
	description: string;
}> = ({ title, icon, units, description }) => {
	return (
		<Card>
			<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
				<CardTitle className='text-sm font-medium'>{title}</CardTitle>
				{icon}
			</CardHeader>
			<CardContent>
				<div className='text-2xl font-bold'>{units}</div>
				<p className='text-xs text-muted-foreground'>{description}</p>
			</CardContent>
		</Card>
	);
};
