import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
		extends: ['js/recommended'],
		rules: {
			indent: ['error', 2, { SwitchCase: 1 }],
			quotes: ['warn', 'double', { avoidEscape: true, allowTemplateLiterals: true }],
			'arrow-parens': ['error', 'always'],
		},
		languageOptions: { globals: globals.browser },
	},
]);
