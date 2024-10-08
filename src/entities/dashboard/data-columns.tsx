import { ColumnDef } from '@tanstack/react-table';

import { topRevenueSources } from 'entities/dashboard/data';

import { Checkbox } from 'shared/components/shadcn/ui/checkbox';
import { DataTableColumnHeader } from 'shared/components/data-table/data-table-column-header';
import { DataTableRowActions } from 'shared/components/data-table/data-table-row-actions';

import { RecentStream } from './types';
import { formatDate } from 'date-fns';

export const dataColumns: ColumnDef<RecentStream>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Select all'
				className='translate-y-[2px]'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label='Select row'
				className='translate-y-[2px]'
			/>
		),
		enableSorting: false,
		enableHiding: false
	},
	{
		accessorKey: 'userID',
		header: ({ column }) => <DataTableColumnHeader column={column} title='User ID' />,
		cell: ({ row }) => <div className='w-[80px]'>{row.getValue('userID')}</div>,
		enableSorting: false,
		enableHiding: false
	},
	{
		accessorKey: 'name',
		header: ({ column }) => {
			return <DataTableColumnHeader column={column} title='Name' />;
		},
		cell: ({ row }) => {
			return (
				<div className='flex space-x-2'>
					<span className='max-w-[500px] truncate font-medium'>
						{row.getValue('name')}
					</span>
				</div>
			);
		}
	},
	{
		accessorKey: 'artist',
		header: ({ column }) => <DataTableColumnHeader column={column} title='Artist' />,
		cell: ({ row }) => {
			return (
				<div className='flex space-x-2'>
					<span className='max-w-[500px] truncate font-medium'>
						{row.getValue('artist')}
					</span>
				</div>
			);
		},
		filterFn: (row, columnId, value) => {
			const { condition, value: filterValue } = value as { condition: string; value: string };
			const rowValue = row?.getValue(columnId) as string;
			switch (condition) {
				case 'includes':
					return rowValue.toString().includes(filterValue);
				case 'excludes':
					return !rowValue.toString().includes(filterValue);
				default:
					return false;
			}
		}
	},
	{
		accessorKey: 'streamCount',
		header: ({ column }) => <DataTableColumnHeader column={column} title='Stream Count' />,
		cell: ({ row }) => {
			return (
				<div className='flex space-x-2'>
					<span className='max-w-[500px] truncate font-medium'>
						{row.getValue('streamCount')}
					</span>
				</div>
			);
		},
		filterFn: (row, columnId, value) => {
			// TODO move to util
			const { condition, value: filterValue } = value as { condition: string; value: number };
			switch (condition) {
				case '>':
					return parseInt(row.getValue(columnId)) > filterValue;
				case '<':
					return parseInt(row.getValue(columnId)) < filterValue;
				case '=':
					return parseInt(row.getValue(columnId)) === filterValue;
				case '>=':
					return parseInt(row.getValue(columnId)) >= filterValue;
				case '<=':
					return parseInt(row.getValue(columnId)) <= filterValue;
				case '!=':
					return parseInt(row.getValue(columnId)) !== filterValue;
				case 'includes':
					return `${row.getValue(columnId)}`.includes(`${filterValue}`);
				case 'excludes':
					return `!${row.getValue(columnId)}`.includes(`${filterValue}`);
				default:
					return false;
			}
		}
	},
	{
		accessorKey: 'dateStreamed',
		header: ({ column }) => <DataTableColumnHeader column={column} title='Last Streamed' />,
		cell: ({ row }) => {
			return (
				<div className='flex space-x-2'>
					<span className='max-w-[500px] truncate font-medium'>
						{formatDate(row.getValue('dateStreamed'), 'yyyy-MM-dd HH:mm')}
					</span>
				</div>
			);
		}
	},
	{
		accessorKey: 'topRevenueSource',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Top Revenue Source' />
		),
		cell: ({ row }) => {
			const topRevenueSource = topRevenueSources.find(
				(topRevenueSource) => topRevenueSource.value === row.getValue('topRevenueSource')
			);

			if (!topRevenueSource) {
				return null;
			}

			return (
				<div className='flex items-center'>
					{topRevenueSource.icon && (
						<topRevenueSource.icon className='mr-2 h-4 w-4 text-muted-foreground' />
					)}
					<span>{topRevenueSource.label}</span>
				</div>
			);
		},
		// custom filter needed for multi facet selection
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		}
	},
	{
		id: 'actions',
		cell: ({ row }) => <DataTableRowActions row={row} />
	},
	{
		// for multi col filter
		id: 'global',
		filterFn: (row, _, value) => {
			const searchTerm = value.toLowerCase();

			const name = row.getValue('name') as string;
			const artist = row.getValue('artist') as string;

			return (
				name.toLowerCase().includes(searchTerm) || artist.toLowerCase().includes(searchTerm)
			);
		}
	}
];
