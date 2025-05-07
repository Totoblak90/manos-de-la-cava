import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Image } from '@mdlc/shared/models/image';
import { ImageViewerComponent } from '../../image-viewer/image-viewer.component';

@Component({
	selector: 'mdlc-base-card',
	imports: [RouterModule, ImageViewerComponent],
	templateUrl: './base-card.component.html',
	styleUrl: './base-card.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseCardComponent {
	/** Title. */
	public readonly title = input.required<string>();

	/** Description. */
	public readonly description = input.required<string>();

	/** Image URL. */
	public readonly imageParams = input.required<Image>();

	/** Link href. */
	public readonly linkHref = input.required<string>();
}
