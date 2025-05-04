import { Routes } from '@angular/router';
import { commonRoutePaths } from './shared/utils/route-paths/common-route-paths';

export const routes: Routes = [
	{
		path: commonRoutePaths.home.path,
		pathMatch: 'full',
		loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent),
	},
	{
		path: commonRoutePaths.programs.path,
		loadComponent: () => import('./features/programs/programs.component').then((c) => c.ProgramsComponent),
	},
	{
		path: commonRoutePaths.aboutUs.path,
		loadComponent: () => import('./features/about-us/about-us.component').then((c) => c.AboutUsComponent),
	},
	{
		path: commonRoutePaths.donate.path,
		loadComponent: () => import('./features/donate/donate.component').then((c) => c.DonateComponent),
	},
	{
		path: '**',
		redirectTo: commonRoutePaths.home.path,
	},
];
