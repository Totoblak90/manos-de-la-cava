import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'mdlc-image-viewer',
	imports: [],
	templateUrl: './image-viewer.component.html',
	styleUrl: './image-viewer.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageViewerComponent {
	/** Image URL. */
	public readonly imgUrl = input.required<string>();

	/** Image alt text. */
	public readonly imgAlt = input.required<string>();
}
