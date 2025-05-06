import { buildRoutePaths } from './build-route-paths';

/**
 * Programs route paths are used in the programs section of the application.
 * They are used to build the routes for the programs section.
 */
export const programsRoutePaths = buildRoutePaths({
	kindergarden: { path: 'primera-infancia' },
	education: { path: 'educacion' },
	healthAccess: { path: 'acceso-a-la-salud' },
	sports: { path: 'deportes' },
	adults: { path: 'adultos' },
	food: { path: 'alimentacion-y-calidad-nutricional' },
	socialInterventions: { path: 'intervenciones-sociales' },
} as const);
