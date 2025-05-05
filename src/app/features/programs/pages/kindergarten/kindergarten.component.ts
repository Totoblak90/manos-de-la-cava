import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { GalleryItem } from '@mdlc/shared/models/gallery-item';

@Component({
	selector: 'mdlc-kindergarten',
	imports: [ContentLayoutComponent, ImageViewerComponent, GalleryComponent],
	templateUrl: './kindergarten.component.html',
	styleUrls: ['../../programs.component.css', './kindergarten.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KindergartenComponent {
	readonly kindergartenGalleryImages: GalleryItem[] = [
		{
			imageUrl: 'assets/programs/kindergarten/manitos-2.webp',
			altText: 'Niños jugando con bloques de construcción coloridos en el jardín maternal.',
			width: 600,
			height: 400,
		},
		{
			imageUrl: 'assets/programs/kindergarten/manitos-3.webp',
			altText: 'Niña sonriendo mientras juega en una estructura tipo tobogán en el jardín maternal.',
			width: 600,
			height: 400,
		},
	];
}
