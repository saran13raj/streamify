import { CartesianGrid, Line, LineChart as LineChartRe, XAxis } from 'recharts';

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
	}
} satisfies ChartConfig;

export const LineChartCustom: React.FC<CustomChart> = ({
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
					<LineChartRe
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12
						}}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey={dataKey}
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<Line
							dataKey='desktop'
							type='monotone'
							stroke='var(--color-desktop)'
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey='mobile'
							type='monotone'
							stroke='var(--color-mobile)'
							strokeWidth={2}
							dot={false}
						/>
					</LineChartRe>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className='flex w-full items-start gap-2 text-sm'>
					<div className='grid gap-2'>
						<div className='flex items-center gap-2 font-medium leading-none'>
							{footer.title ? footer.title : null}
						</div>
						<div className='flex items-center gap-2 leading-none text-muted-foreground'>
							{footer.description}
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
};
