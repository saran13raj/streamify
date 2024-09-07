import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';

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

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-1))'
	},
	mobile: {
		label: 'Mobile',
		color: 'hsl(var(--chart-2))'
	},
	label: {
		color: 'hsl(var(--background))'
	}
} satisfies ChartConfig;

export const BarChartHorizontal: React.FC<CustomChart> = ({
	title,
	description,
	footer,
	data,
	dataKey
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className='md:h-[220px] lg:h-[220px] w-[100%]'>
					<BarChart
						accessibilityLayer
						data={data}
						layout='vertical'
						margin={{
							right: 16
						}}>
						<CartesianGrid horizontal={false} />
						<YAxis
							dataKey={dataKey}
							type='category'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
							hide
						/>
						<XAxis dataKey='desktop' type='number' hide />
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator='line' />}
						/>
						<Bar
							dataKey='desktop'
							layout='vertical'
							fill='var(--color-desktop)'
							radius={4}>
							<LabelList
								dataKey={dataKey}
								position='insideLeft'
								offset={8}
								className='fill-[--color-label]'
								fontSize={12}
							/>
							<LabelList
								dataKey='desktop'
								position='right'
								offset={8}
								className='fill-foreground'
								fontSize={12}
							/>
						</Bar>
					</BarChart>
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
