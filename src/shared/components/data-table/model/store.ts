import { createDomain, sample } from 'effector';

const domain = createDomain('shared/components/data-table');

export const filterValueChanged = domain.event<number | null>();

export const $filterValue = domain.store<number | null>(null);

$filterValue.on(filterValueChanged, (_, payload) => payload);
