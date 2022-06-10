module.exports = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	bail: 1,
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	transform: {
		'^.+\\.tsx?$': 'babel-jest',
	},
	moduleNameMapper: {
		'^@modules/(.*)$': '<rootDir>/modules/$1',
		'^@app.config$': '<rootDir>/app.config.ts',
		'^@app.routes$': '<rootDir>/app.routes.ts',
	},
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.jest.json',
		},
	},
}
