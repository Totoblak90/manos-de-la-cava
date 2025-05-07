import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ADDRESS, EMAIL, GOOGLE_MAPS_URL } from '@mdlc/shared/constants/institutional-info/institutional-info';

import { SocialMediaIconsComponent } from '../social-media-icons/social-media-icons.component';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'mdlc-footer',
	imports: [RouterModule, MatIconModule, MatButtonModule, SocialMediaIconsComponent],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	/** Institutional email. */
	protected readonly email = EMAIL;

	/** Prettified address. */
	protected readonly prettifiedAddress = `${ADDRESS.streetName} ${ADDRESS.streetNumber}, ${ADDRESS.city}`;

	/** Google Maps URL. */
	protected readonly googleMapsUrl = GOOGLE_MAPS_URL;
}
