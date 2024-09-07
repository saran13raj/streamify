import { dashboardEntityModel } from 'entities/dashboard';
import { topRevenueSources } from 'entities/dashboard/data';
import { Pie, PieChart } from 'recharts';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from 'shared/components/shadcn/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from 'shared/components/shadcn/ui/chart';
import { CustomChart } from 'shared/types';

export const PieChartCustom: React.FC<CustomChart> = ({
	title,
	description,
	footer,
	data,
	dataKey,
	nameKey
}) => {
	const chartConfig = {} satisfies ChartConfig;

	return (
		<Card className='flex flex-col'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className='flex-1 pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square max-h-[260px] pb-0 [&_.recharts-pie-label-text]:fill-foreground'>
					<PieChart>
						<ChartTooltip content={<ChartTooltipContent hideLabel />} />
						<Pie
							data={data}
							dataKey={dataKey}
							label
							nameKey={nameKey}
							onClick={(meta) => {
								const selectedValue =
									topRevenueSources.find(
										(source) =>
											source.label.toLowerCase() === meta.type.toLowerCase()
									)?.value ?? '';
								dashboardEntityModel.revenueSourceSelected([selectedValue]);
							}}
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col items-start gap-2 text-sm'>
				<div className='flex gap-2 font-medium leading-none'>
					{footer.title ? footer.title : null}
				</div>
				<div className='leading-none text-muted-foreground'>{footer.description}</div>
			</CardFooter>
		</Card>
	);
};
