export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'^.+\\.svg$': 'jest-transformer-svg',
		'^src/(.*)$': '<rootDir>/src/$1',
		'^shared/(.*)$': '<rootDir>/src/shared/$1'
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	modulePaths: ['<rootDir>/src'],
	roots: ['<rootDir>/src'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx,ts,tsx}',
		// don't include in coverage
		'!<rootDir>/src/**/shadcn/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/theme/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/data-table/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/model/**/*.{js,ts}',
		'!<rootDir>/src/**/types.{js,ts}',
		'!<rootDir>/src/**/data.{js,ts}',
		'!<rootDir>/src/**/lib/**/*.{js,ts}'
	]
	// coverageReporters: ['lcov']
};
