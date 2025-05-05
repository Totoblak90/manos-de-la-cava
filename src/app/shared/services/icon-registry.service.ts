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
	];

	/** Register icons. */
	public registerIcons(): void {
		this.icons.forEach(({ name, path }) => this.registerIcon(name, path));
	}

	private registerIcon(name: string, path: string): void {
		this.matIconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(path));
	}
}
