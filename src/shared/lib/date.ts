import { format } from 'date-fns';

export const formatDate = (date: Date, fmt = 'yyyy-MM-dd hh:mm:ss a'): string => format(date, fmt);
