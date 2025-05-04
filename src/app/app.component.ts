import { Component, inject } from '@angular/core';

import { HeaderComponent } from './shared/components/header/header.component';
import { IconRegistryService } from './shared/services/icon-registry.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
@Component({
	selector: 'app-root',
	imports: [RouterModule, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	providers: [IconRegistryService],
})
export class AppComponent {
	private readonly iconRegistryService = inject(IconRegistryService);

	constructor() {
		this.iconRegistryService.registerIcons();
	}
}
