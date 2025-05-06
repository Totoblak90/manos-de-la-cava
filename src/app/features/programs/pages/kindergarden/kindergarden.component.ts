import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { GalleryComponent } from '@mdlc/features/programs/components/gallery/gallery.component';
import { GalleryItem } from '@mdlc/shared/models/gallery-item';

@Component({
	selector: 'mdlc-kindergarden',
	imports: [ContentLayoutComponent, ImageViewerComponent, GalleryComponent],
	templateUrl: './kindergarden.component.html',
	styleUrls: ['../../programs.component.css', './kindergarden.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KindergardenComponent {
	readonly kindergardenGalleryImages: GalleryItem[] = [
		{
			imageUrl: 'assets/programs/kindergarden/manitos-2.webp',
			altText: 'Niños jugando con bloques de construcción coloridos en el jardín maternal.',
			width: 600,
			height: 400,
		},
		{
			imageUrl: 'assets/programs/kindergarden/manitos-3.webp',
			altText: 'Niña sonriendo mientras juega en una estructura tipo tobogán en el jardín maternal.',
			width: 600,
			height: 400,
		},
	];
}
