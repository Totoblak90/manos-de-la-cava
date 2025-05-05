import { Routes } from '@angular/router';
import { programsRoutePaths } from '../../shared/utils/route-paths/programs-route-paths';
import { commonRoutePaths } from '@mdlc/shared/utils/route-paths/common-route-paths';

export const programsRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: commonRoutePaths.home.url,
	},
	{
		path: programsRoutePaths.kinderGarten.path,
		loadComponent: () => import('./pages/kindergarten/kindergarten.component').then((c) => c.KindergartenComponent),
	},
	{
		path: programsRoutePaths.education.path,
		loadComponent: () => import('./pages/education/education.component').then((c) => c.EducationComponent),
	},
	{
		path: programsRoutePaths.healthAccess.path,
		loadComponent: () => import('./pages/health-access/health-access.component').then((c) => c.HealthAccessComponent),
	},
	{
		path: programsRoutePaths.sports.path,
		loadComponent: () => import('./pages/sports/sports.component').then((c) => c.SportsComponent),
	},
	{
		path: programsRoutePaths.adults.path,
		loadComponent: () => import('./pages/adults/adults.component').then((c) => c.AdultsComponent),
	},
	{
		path: programsRoutePaths.food.path,
		loadComponent: () => import('./pages/food/food.component').then((c) => c.FoodComponent),
	},
	{
		path: programsRoutePaths.socialInterventions.path,
		loadComponent: () =>
			import('./pages/social-interventions/social-interventions.component').then((c) => c.SocialInterventionsComponent),
	},
	{
		path: '**',
		redirectTo: commonRoutePaths.home.url,
	},
];
