import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';
import { DonationInfoCardData } from '@mdlc/shared/models/cards/donation-card';

@Component({
	selector: 'mdlc-donation-info-card',
	imports: [MatIconModule, MatButtonModule],
	templateUrl: './donation-info-card.component.html',
	styleUrl: './donation-info-card.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonationInfoCardComponent {
	private readonly clipboard = inject(Clipboard);

	public readonly cardData = input.required<DonationInfoCardData>();

	protected copiedStates = signal<Record<string, boolean>>({});

	/**
	 * Copy to clipboard.
	 * @param value Value to copy.
	 * @param fieldLabel Field label.
	 */
	protected copyToClipboard(value: string, fieldLabel: string): void {
		const success = this.clipboard.copy(value);
		if (success) {
			this.copiedStates.update((states) => ({ ...states, [fieldLabel]: true }));
			setTimeout(() => {
				this.copiedStates.update((states) => ({ ...states, [fieldLabel]: false }));
			}, 1500);
		}
	}
}
