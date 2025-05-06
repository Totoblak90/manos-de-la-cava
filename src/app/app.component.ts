import { Component, inject } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { IconRegistryService } from './shared/services/icon-registry.service';
@Component({
	selector: 'app-root',
	imports: [RouterModule, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	private readonly iconRegistryService = inject(IconRegistryService);

	constructor() {
		this.iconRegistryService.registerIcons();
	}
}
