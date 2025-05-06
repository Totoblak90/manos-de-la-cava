import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/** Register Icon. */
type RegisterIcon = {
	/** Icon name. */
	readonly name: string;

	/** Icon path. */
	readonly path: string;
};

@Injectable({ providedIn: 'root' })
export class IconRegistryService {
	private readonly matIconRegistry = inject(MatIconRegistry);

	private readonly domSanitizer = inject(DomSanitizer);

	private readonly icons: readonly RegisterIcon[] = [
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
	];

	/** Register icons. */
	public registerIcons(): void {
		this.icons.forEach(({ name, path }) => this.registerIcon(name, path));
	}

	private registerIcon(name: string, path: string): void {
		this.matIconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(path));
	}
}
