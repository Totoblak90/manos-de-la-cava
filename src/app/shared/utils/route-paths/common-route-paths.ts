import { buildRoutePaths } from './build-route-paths';
import { programsRoutePaths } from './programs-route-paths';

const baseRoutePaths = buildRoutePaths({
	home: { path: '' },
	programs: {
		path: 'areas',
		children: {
			...programsRoutePaths,
		},
	},
	aboutUs: { path: 'nosotros' },
	donate: { path: 'donar' },
} as const);

/** Common route paths can be used throughout the project. */
export const commonRoutePaths = {
	...baseRoutePaths,
};
