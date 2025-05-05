import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'mdlc-stripped-bordered-card',
	imports: [],
	templateUrl: './stripped-bordered-card.component.html',
	styleUrl: './stripped-bordered-card.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrippedBorderedCardComponent {
	/** Card title. */
	public readonly title = input.required<string>();
}
