import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from 'shared/components/shadcn/ui/button';
import { Input } from 'shared/components/shadcn/ui/input';

import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { DataTableViewOptions } from './data-table-view-options';
import { topRevenueSources } from 'entities/dashboard/data';
import { DataTableConditionalFilter } from './data-table-conditional-filter';

type DataTableToolbarProps<TData> = {
	table: Table<TData>;
	facetSelected?: string[];
};

export function DataTableToolbar<TData>({ table, facetSelected }: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0;

	const shouldFilter = ['streamCount', 'artist'];

	const filterColumns = table
		.getAllColumns()
		.filter((col) => shouldFilter.find((fil) => fil === col.id));

	return (
		<div className='flex items-center justify-between'>
			<div className='flex flex-1 space-x-2'>
				<Input
					placeholder='Filter Songs...'
					value={(table.getColumn('global')?.getFilterValue() as string) ?? ''}
					onChange={(event) =>
						table.getColumn('global')?.setFilterValue(event.target.value)
					}
					className='h-8 w-[150px] lg:w-[250px]'
				/>
				{table.getColumn('topRevenueSource') && (
					<DataTableFacetedFilter
						column={table.getColumn('topRevenueSource')}
						title='Top Revenue Source'
						options={topRevenueSources}
						selected={facetSelected}
					/>
				)}
				{filterColumns.length && (
					<DataTableConditionalFilter columns={filterColumns} table={table} />
				)}
				{isFiltered && (
					<Button
						variant='ghost'
						onClick={() => table.resetColumnFilters()}
						className='h-8 px-2 lg:px-3 hidden md:flex lg:flex'>
						Reset
						<Cross2Icon className='ml-2 h-4 w-4' />
					</Button>
				)}
			</div>
			<DataTableViewOptions table={table} />
		</div>
	);
}
