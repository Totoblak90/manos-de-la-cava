import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { Image } from '@mdlc/shared/models/image';

@Component({
	selector: 'mdlc-hero-mobile',
	imports: [RouterModule, ImageViewerComponent],
	templateUrl: './hero-mobile.component.html',
	styleUrl: './hero-mobile.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroMobileComponent {
	/** Top images row. */
	protected readonly topImages: Image[] = [
		{
			imgUrl: 'assets/home/hero/hero-1.webp',
			imgAlt: 'Hero 1',
		},
		{
			imgUrl: 'assets/home/hero/hero-2.webp',
			imgAlt: 'Hero 2',
		},
	];

	/** Bottom images row. */
	protected readonly bottomImages: Image[] = [
		{
			imgUrl: 'assets/home/hero/hero-3.webp',
			imgAlt: 'Hero 3',
		},
		{
			imgUrl: 'assets/home/hero/hero-4.webp',
			imgAlt: 'Hero 4',
		},
		{
			imgUrl: 'assets/home/hero/hero-5.webp',
			imgAlt: 'Hero 5',
		},
	];
}
