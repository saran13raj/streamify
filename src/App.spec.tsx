// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

jest.mock('./entities/theme/theme-provider', () => ({
	ThemeProvider: ({ children }: { children: React.ReactNode }) => (
		<div data-testid='theme-provider'>{children}</div>
	)
}));

jest.mock('./entities/theme/toggle', () => ({
	ThemeToggle: () => <button data-testid='theme-toggle'>Toggle Theme</button>
}));

jest.mock('./pages/dashboard', () => ({
	Dashboard: () => <div data-testid='dashboard'>Dashboard Content</div>
}));

describe('App Component', () => {
	it('should render the ThemeProvider, ThemeToggle, and Dashboard', () => {
		render(<App />);

		expect(screen.getByTestId('theme-provider')).toBeInTheDocument();

		expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();

		expect(screen.getByTestId('dashboard')).toBeInTheDocument();
	});
});
