import globals from 'globals'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'

const jsConfig = {
	plugins: {
		react: reactPlugin,
		'react-hooks': hooksPlugin,
		'@next/next': nextPlugin
	},
	rules: {
		'no-unused-vars': 'error',
		...reactPlugin.configs['jsx-runtime'].rules,
		...hooksPlugin.configs.recommended.rules,
		...nextPlugin.configs.recommended.rules,
		...nextPlugin.configs['core-web-vitals'].rules,
		'@next/next/no-img-element': 'error',
		'no-prototype-builtins': 'off'
	}
}

export default [
	jsConfig,
	{
		ignores: [
			'.next/',
			'node_modules/',
			'tests/',
			'styles/',
			'.husky/',
			'.github/',
			'.public/'
		],
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
				...globals.es6
			},
			parserOptions: {
				ecmaVersion: 6,
				sourceType: 'module'
			}
		}
	}
]
