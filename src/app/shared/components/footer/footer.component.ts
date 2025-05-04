import { ChangeDetectionStrategy, Component } from '@angular/core';
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
	/** Institutional name. */
	protected readonly address = ADDRESS;

	/** Institutional email. */
	protected readonly email = EMAIL;
}
