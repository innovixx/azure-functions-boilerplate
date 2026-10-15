// @ts-nocheck
import baseConfig from '@innovixx/eslint-config/config/configs/base/index.mjs';
import typescriptConfig from '@innovixx/eslint-config/config/configs/typescript/index.mjs';

export default [
	baseConfig,
	typescriptConfig,
	{
		files: ['**/*.{js,ts}'],
	},
	{
		files: ['eslint.config.mjs'],
		languageOptions: {
			parserOptions: {
				project: null,
			},
		},
	},
];
