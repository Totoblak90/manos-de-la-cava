/* eslint-disable @typescript-eslint/naming-convention */
import { resolve } from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import { default as saritasaEslintConfig } from '@saritasa/eslint-config-saritasa';
import { config as tsEslintConfig } from 'typescript-eslint';
import { configs as angularEslintConfigs, processInlineTemplates } from 'angular-eslint';

export default tsEslintConfig(

	// We have to use explicit global ignore. Otherwise, ESLint will check all *.js files.
	// Those files are always matched unless you explicitly exclude them using global ignores.
	// https://eslint.org/docs/latest/use/configure/configuration-files#specifying-files-and-ignores
	includeIgnoreFile(resolve(import.meta.dirname, '.gitignore')),
	{
		files: ['**/*.ts', 'eslint.config.js'],
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['eslint.config.js'],
				},
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
		},
		extends: [
			...saritasaEslintConfig,
			...angularEslintConfigs.tsRecommended,
			'plugin:rxjs/recommended'
		],
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: false,
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'no-tabs': 'off',
			'no-void': 'error',
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['@mdlc/*', '!@mdlc/common'],
							// eslint-disable-next-line max-len
							message: 'You can not import from one application to another directly, please move the reusable/shared entities into common library. https://wiki.saritasa.rocks/frontend/frameworks/angular/project-structure#relationships-between-applications',
						},
					],
				},
			],
			'@typescript-eslint/prefer-nullish-coalescing': [
				'error',
				{
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true,
				},
			],
			'jsdoc/tag-lines': 'off',
			'@stylistic/indent': ['error', 'tab'],
		},
	},
	{
		files: ['src/app/**/*.html'],
		ignores: ['src/index.html'],
		extends: [...angularEslintConfigs.templateRecommended],
		rules: {
			'@angular-eslint/template/alt-text': 'error',
			'@angular-eslint/template/conditional-complexity': [
				'error',
				{
					maxComplexity: 1,
				},
			],
			'@angular-eslint/template/no-duplicate-attributes': 'error',
			'@angular-eslint/template/no-inline-styles': [
				'error',
				{
					allowNgStyle: true,
					allowBindToStyle: true,
				},
			],
			'@angular-eslint/template/no-interpolation-in-attributes': 'error',
			'@angular-eslint/template/no-positive-tabindex': 'error',
			'@angular-eslint/template/use-track-by-function': 'error',
		},
	},
	{
		files: ['**/*.component.ts', '**/*.directive.ts'],
		processor: processInlineTemplates,
		rules: {
			'@angular-eslint/no-host-metadata-property': [
				'error',
				{
					allowStatic: true,
				},
			],
		},
	},
	{
		files: ['**/*.dto.ts', '**/*.mapper.ts', '**/*-api.service.ts'],
		rules: {
			'no-restricted-syntax': [
				'error',
				{
					selector: 'TSPropertySignature[readonly=undefined]',
					message: 'Missing \'readonly\' modifier for the DTO property.',
				},
				{
					selector: 'TSPropertySignature TSTypeAnnotation[typeAnnotation.type=\'TSArrayType\']',
					message: 'Missing \'readonly\' type modifier for array.',
				},
			],
			'@typescript-eslint/naming-convention': 'off',
		},
	},
	{
		files: ['**/*.spec.ts'],
		rules: {
			'max-lines-per-function': 'off',
			'@typescript-eslint/naming-convention': 'off',
			'@angular-eslint/use-component-selector': 'off',
			'jsdoc/require-jsdoc': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
		},
	},
	{
		files: ['src/app/**/*.ts'],
		rules: {
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'mdlc',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'mdlc',
					style: 'kebab-case',
				},
			],
		},
	},
);
