/**
 * Transforms a kebab-case string to PascalCase.
 * @param str Kebab-case string.
 */
export function kebabToPascalCase(str: string): string {
	return str
		.split('-')
		.map(part => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}
