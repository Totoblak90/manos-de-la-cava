import { ProgramName } from '../models/program';

/**
 * Gets the corresponding CSS background color variable for a given program name.
 * @param programName The name of the program.
 * @returns The CSS variable string for the background color.
 */
export function getProgramBackgroundColor(programName: ProgramName | string): string {
	switch (programName) {
		case 'Jardín Maternal':
			return 'var(--tertiary-color)';
		case 'Educación':
			return 'var(--quaternary-color)';
		case 'Deportes':
			return 'var(--quinary-color)';
		case 'Acceso a la salud':
			return 'var(--senary-color)';
		case 'Alimentación y calidad nutricional':
			return 'var(--tertiary-dark-color)';
		case 'Adultos':
			return 'var(--quaternary-dark-color)';
		case 'Intervenciones sociales':
			return 'var(--quinary-dark-color)';
		default:
			return 'var(--secondary-color)';
	}
}

/**
 * Gets the corresponding CSS text/contrast color variable for a given program name.
 * Ensures text is readable against the program's background color.
 * @param programName The name of the program.
 * @returns The CSS variable string for the text/contrast color.
 */
export function getProgramTextColor(programName: ProgramName | string): string {
	switch (programName) {
		case 'Jardín Maternal':
			return 'var(--tertiary-contrast-color, #000000)';
		case 'Educación':
			return 'var(--quaternary-contrast-color, #000000)';
		case 'Deportes':
			return 'var(--quinary-contrast-color, #000000)';
		case 'Acceso a la salud':
			return 'var(--senary-contrast-color, #000000)';

		case 'Alimentación y calidad nutricional':
			return 'var(--tertiary-dark-contrast-color, #ffffff)';
		case 'Adultos':
			return 'var(--quaternary-dark-contrast-color, #ffffff)';
		case 'Intervenciones sociales':
			return 'var(--quinary-dark-contrast-color, #ffffff)';

		default:
			return 'var(--secondary-contrast-color, #000000)';
	}
}
