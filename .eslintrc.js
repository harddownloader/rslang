module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['react', 'prettier', 'unicorn', 'react-hooks'],
	extends: [
		'airbnb-base',
		'plugin:unicorn/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},

	rules: {
		'unicorn/prefer-query-selector': 'off',
		'import/no-unresolved': 'off',
		'unicorn/prevent-abbreviations': 1,
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true,
				},
			},
		],
		'import/extensions': [
			'error',
			'never',
			{
				svg: 'always',
				png: 'always',
				jpg: 'always',
			},
		],
		quotes: ['error', 'single'],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	},
	settings: {
		version: 'detect', // React version. "detect" автоматически выбирает версию, которую вы установили.
		flowVersion: '0.53', // Версия потока
	},
}
