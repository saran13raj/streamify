import { PlusCircledIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Column, Table } from '@tanstack/react-table';

import { Button } from 'shared/components/shadcn/ui/button';
import { Input } from 'shared/components/shadcn/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from 'shared/components/shadcn/ui/select';

import { Popover, PopoverContent, PopoverTrigger } from 'shared/components/shadcn/ui/popover';
import { Badge } from 'shared/components/shadcn/ui/badge';

type ConditionalFilterProps<T> = {
	columns: Column<T>[];
	table: Table<T>;
};

export const DataTableConditionalFilter = <T,>({ columns, table }: ConditionalFilterProps<T>) => {
	// TODO move to model
	const [filterValue, setFilterValue] = React.useState<string | number | null>(null);
	const [filterCondition, setFilterCondition] = React.useState<
		'>' | '<' | '=' | '>=' | '<=' | '!=' | 'includes' | 'excludes'
	>('includes');
	const [selectedColumnId, setSelectedColumnId] = React.useState<string | null>(null);
	const [appliedFilters, setAppliedFilters] = React.useState<{
		[key: string]: { value: string | number | null; condition: string };
	}>({});

	const handleAddFilter = () => {
		if (selectedColumnId) {
			setAppliedFilters((prev) => ({
				...prev,
				[selectedColumnId]: { value: filterValue, condition: filterCondition }
			}));
			const column = columns.find((col) => col.id === selectedColumnId);
			column?.setFilterValue({ value: filterValue, condition: filterCondition });
			setFilterValue(null);
			setSelectedColumnId(null);
			setFilterCondition('includes');
		}
	};

	const handleClearFilter = (columnId: string) => {
		setAppliedFilters((prev) => {
			const newFilters = { ...prev };
			delete newFilters[columnId];
			return newFilters;
		});
		const column = columns.find((col) => col.id === columnId);
		column?.setFilterValue(null);
	};

	React.useEffect(() => {
		const currentFilters = table.getState().columnFilters;
		if (!currentFilters || currentFilters.length === 0) {
			setAppliedFilters({});
		}
	}, [table.getState().columnFilters]);

	return (
		<div className='space-y-4'>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant='outline' size='sm' className='h-8 border-dashed'>
						<PlusCircledIcon className='mr-2 h-4 w-4' />
						Add Filter
						{Object.entries(appliedFilters).map(([columnId, { value, condition }]) => (
							<Badge
								key={columnId}
								variant='secondary'
								className='rounded-sm px-1 font-normal'>
								{columns.find((col) => col.id === columnId)?.id}: {condition}{' '}
								{value}
								{/* TODO add clear filter */}
								{/* <Button
									variant='link'
									className='ml-2 h-10'
									onClick={() => handleClearFilter(columnId)}>
									Clear
								</Button> */}
							</Badge>
						))}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[300px] p-4' align='start'>
					<div className='space-y-2'>
						<Select onValueChange={setSelectedColumnId} value={selectedColumnId || ''}>
							<SelectTrigger className='w-full'>
								<SelectValue placeholder='Select Column' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{columns
										.filter((column) => !appliedFilters[column.id])
										.map((column) => (
											<SelectItem key={column.id} value={column.id}>
												{column.id}
											</SelectItem>
										))}
								</SelectGroup>
							</SelectContent>
						</Select>
						<Input
							type='text'
							placeholder={`Filter value...`}
							value={filterValue?.toString() || ''}
							onChange={(e) => setFilterValue(e.target.value ? e.target.value : null)}
						/>
						<Select
							onValueChange={(value) => setFilterCondition(value as any)}
							value={filterCondition}>
							<SelectTrigger className='w-full'>
								<SelectValue placeholder='Condition' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value='>'>&gt;</SelectItem>
									<SelectItem value='<'>&lt;</SelectItem>
									<SelectItem value='='>=</SelectItem>
									<SelectItem value='>='>&gt;=</SelectItem>
									<SelectItem value='<='>&lt;=</SelectItem>
									<SelectItem value='!='>!=</SelectItem>
									<SelectItem value='includes'>includes</SelectItem>
									<SelectItem value='excludes'>excludes</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Button
							variant='outline'
							onClick={handleAddFilter}
							disabled={!selectedColumnId || filterValue === null}>
							Add Filter
						</Button>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};
