import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ALL_REGISTERED_ICONS, IconName } from '../models/icon';

@Injectable({ providedIn: 'root' })
export class IconRegistryService {
	private readonly matIconRegistry = inject(MatIconRegistry);
	private readonly domSanitizer = inject(DomSanitizer);

	public registerIcons(): void {
		ALL_REGISTERED_ICONS.forEach(({ name, path }) => this.registerIcon(name, path));
	}

	private registerIcon(name: IconName, path: string): void {
		this.matIconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(path));
	}
}
