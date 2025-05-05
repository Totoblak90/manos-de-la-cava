import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { StrippedBorderedCardComponent } from '@mdlc/shared/components/cards/stripped-bordered-card/stripped-bordered-card.component';
import {
	ADDRESS,
	EMAIL,
	FACEBOOK,
	INSTAGRAM,
	PHONE,
} from '@mdlc/shared/constants/institutional-info/institutional-info';

@Component({
	selector: 'mdlc-contact',
	imports: [MatIconModule, StrippedBorderedCardComponent],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
	/** Email address. */
	protected readonly email = EMAIL;

	/** Phone number. */
	protected readonly phone = PHONE;

	/** Instagram URL. */
	protected readonly instagramUrl = INSTAGRAM;

	/** Facebook URL. */
	protected readonly facebookUrl = FACEBOOK;

	protected get whatsappUrl(): string {
		if (!this.phone) {
			return '';
		}
		const cleanPhone = this.phone.replace(/\D/g, '');
		return `https://wa.me/${cleanPhone}`;
	}

	/** Address. */
	get prettifiedAddress(): string {
		return (
			ADDRESS.streetName +
			' ' +
			ADDRESS.streetNumber +
			', ' +
			ADDRESS.city +
			'. Código Postal: ' +
			ADDRESS.postalCode +
			', ' +
			ADDRESS.province +
			', ' +
			ADDRESS.country +
			'.'
		);
	}
}
