import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { GalleryItem } from '@mdlc/shared/models/gallery-item';

@Component({
	selector: 'mdlc-gallery',
	imports: [ImageViewerComponent],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
	/** An array of image data objects to display in the gallery. */
	public readonly images = input.required<GalleryItem[]>();
}
