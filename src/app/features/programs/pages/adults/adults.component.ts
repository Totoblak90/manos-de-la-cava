import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';

import { GalleryItem } from '@mdlc/shared/models/gallery-item';

import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
	selector: 'mdlc-adults',
	imports: [ContentLayoutComponent, ImageViewerComponent, GalleryComponent],
	templateUrl: './adults.component.html',
	styleUrls: ['../../programs.component.css', './adults.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdultsComponent {
	readonly adultsGalleryImages: GalleryItem[] = [
		{
			imageUrl: 'assets/programs/kindergarden/manitos-1.webp',
			altText: 'Adultos participando en talleres de capacitación.',
			width: 600,
			height: 400,
		},
		{
			imageUrl: 'assets/programs/kindergarden/manitos-2.webp',
			altText: 'Grupo de adultos en una reunión comunitaria.',
			width: 600,
			height: 400,
		},
	];

}
