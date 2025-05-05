import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SOCIAL_MEDIA } from '@mdlc/shared/constants/institutional-info/institutional-info';

type SocialMediaIconLink = {
	/** Href. */
	readonly href: string;

	/** Icon name. */
	readonly iconName: string;
};

@Component({
	selector: 'mdlc-social-media-icons',
	imports: [MatIconModule, MatButtonModule],
	templateUrl: './social-media-icons.component.html',
	styleUrl: './social-media-icons.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaIconsComponent {
	protected readonly socialMediaList = signal(this.createSocialMediaList());

	private createSocialMediaList(): ReadonlyArray<SocialMediaIconLink> {
		return Object.entries(SOCIAL_MEDIA).map(
			([socialMediaName, url]) =>
				({
					href: url,
					iconName: socialMediaName.toLocaleLowerCase(),
				}) as const,
		);
	}
}
