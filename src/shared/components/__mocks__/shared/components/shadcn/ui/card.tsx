export const Card = jest.fn(({ children }) => <div data-testid='card'>{children}</div>);

export const CardContent = jest.fn(({ children }) => (
	<div data-testid='card-content'>{children}</div>
));

export const CardDescription = jest.fn(({ children }) => (
	<div data-testid='card-description'>{children}</div>
));

export const CardFooter = jest.fn(({ children }) => (
	<div data-testid='card-footer'>{children}</div>
));

export const CardHeader = jest.fn(({ children }) => (
	<div data-testid='card-header'>{children}</div>
));

export const CardTitle = jest.fn(({ children }) => <div data-testid='card-title'>{children}</div>);
