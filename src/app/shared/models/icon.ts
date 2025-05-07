import path from 'path';
import { kebabToPascalCase } from '../utils/kebab-to-pascal-case';

/**
 * List of all registered icons.
 * Each icon has a name and a path to its SVG file.
 * The name is used as the icon's identifier, while the path points to the SVG file location.
 */
export const ALL_REGISTERED_ICONS = [
	{
		name: 'whatsapp',
		path: 'assets/icons/logo-whatsapp.svg',
	},
	{
		name: 'facebook',
		path: 'assets/icons/logo-facebook.svg',
	},
	{
		name: 'youtube',
		path: 'assets/icons/logo-youtube.svg',
	},
	{
		name: 'instagram',
		path: 'assets/icons/logo-instagram.svg',
	},
	{
		name: 'adults',
		path: 'assets/icons/programs/adults.svg',
	},
	{
		name: 'education',
		path: 'assets/icons/programs/education.svg',
	},
	{
		name: 'food',
		path: 'assets/icons/programs/food.svg',
	},
	{
		name: 'health-access',
		path: 'assets/icons/programs/health-access.svg',
	},
	{
		name: 'kindergarden',
		path: 'assets/icons/programs/kindergarden.svg',
	},
	{
		name: 'sports',
		path: 'assets/icons/programs/sports.svg',
	},
] as const;

export type IconName = (typeof ALL_REGISTERED_ICONS)[number]['name'];

/**
 * A const object mapping descriptive PascalCase keys to the literal icon names.
 * Provides autocompletion and avoids magic strings in code.
 * Automatically derived from `ALL_REGISTERED_ICONS`.
 * Example: Icons.HealthAccess maps to 'health-access'.
 */
export const Icons = ALL_REGISTERED_ICONS.reduce(
	(acc, icon) => {
		const key = kebabToPascalCase(icon.name);
		(acc as Record<string, IconName>)[key] = icon.name;
		return acc;
	},
	{} as { [Key in IconName as Capitalize<CamelCase<Key>>]: Key },
);

type KebabToCamelCase<S extends string> = S extends `${infer T}-${infer U}`
	? `${T}${Capitalize<KebabToCamelCase<U>>}`
	: S;
type CamelCase<S extends string> = KebabToCamelCase<S>;
