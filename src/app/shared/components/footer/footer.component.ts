import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ADDRESS, EMAIL } from '@mdlc/shared/constants/institutional-info/institutional-info';

import { SocialMediaIconsComponent } from '../social-media-icons/social-media-icons.component';

@Component({
	selector: 'mdlc-footer',
	imports: [MatIconModule, MatButtonModule, SocialMediaIconsComponent],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	/** Institutional email. */
	protected readonly email = EMAIL;

	/** Street name. */
	protected readonly streetName = computed(() => ADDRESS.streetName);

	/** Street number. */
	protected readonly streetNumber = computed(() => ADDRESS.streetNumber);

	/** City. */
	protected readonly city = computed(() => ADDRESS.city);

	/** Postal code. */
	protected readonly postalCode = computed(() => ADDRESS.postalCode);
}
