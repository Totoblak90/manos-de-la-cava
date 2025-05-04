import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageViewer } from '@mdlc/shared/models/image-viewer';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
	selector: 'mdlc-hero-desktop',
	imports: [RouterModule, ImageViewerComponent],
	templateUrl: './hero-desktop.component.html',
	styleUrl: './hero-desktop.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDesktopComponent {
	/** Left column with images. */
	protected readonly leftColumnImages: ImageViewer[] = [
		{
			imgUrl: 'assets/hero/hero-1.webp',
			imgAlt: 'Hero 1',
		},
		{
			imgUrl: 'assets/hero/hero-2.webp',
			imgAlt: 'Hero 2',
		},
	];

	/** Right column with images. */
	protected readonly rightColumnImages: ImageViewer[] = [
		{
			imgUrl: 'assets/hero/hero-3.webp',
			imgAlt: 'Hero 3',
		},
		{
			imgUrl: 'assets/hero/hero-4.webp',
			imgAlt: 'Hero 4',
		},
		{
			imgUrl: 'assets/hero/hero-5.webp',
			imgAlt: 'Hero 5',
		},
	];
}
