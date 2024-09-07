import { ThemeProvider } from 'entities/theme/theme-provider';
import { ThemeToggle } from 'entities/theme/toggle';

import { Dashboard } from 'pages/dashboard';

import './App.css';

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='streamify-ui-theme'>
			<div className='flex-1 space-y-4 p-8 pt-6 text-foreground'>
				<div className='flex justify-end'>
					<ThemeToggle />
				</div>
				<Dashboard />
			</div>
		</ThemeProvider>
	);
}

export default App;
